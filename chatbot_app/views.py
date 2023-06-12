from django.shortcuts import render, redirect
from .chatbot_model import ChatbotModel
import json

def chatbot_view(request):
    if request.method == 'POST':
        message = request.POST.get('message', '').strip()

        if message:
            chatbot = ChatbotModel()
            chatbot.load_model('./model.pkl')

            # Get the prediction from the chatbot model
            response = chatbot.predict([message])
            history = request.session.get('history', [])
            history.append({'message': message, 'response': response})
            request.session['history'] = history

            # Check if prediction score is less than 0.5 and prompt for a new response
            if response and len(response) > 0 and chatbot.prediction_scores[0] < 0.75:
                request.session['prompt_response'] = True
                request.session['prompt_message'] = message

            # Save the data and train the model if a new response was provided
            if 'new_response' in request.session:
                new_response = request.session['new_response']
                training_data = 'data/training_data.json'
                with open(training_data, 'r') as f:
                    data = json.load(f)
                X_train = data['input']
                y_train = data['responses']
                X_train.append(request.session['prompt_message'])
                y_train.append(new_response.strip())
                data['input'] = X_train
                data['responses'] = y_train
                with open(training_data, 'w') as f:
                    json.dump(data, f)
                # Retrain the model with updated training data
                chatbot.train(X_train, y_train)

                thanks_message = "Thanks for providing the new response! I will now use it for similar inputs."
                history.append({'message': '', 'response': thanks_message})
                request.session['history'] = history

                # Clear the prompt-related session data
                request.session.pop('prompt_response', None)
                request.session.pop('prompt_message', None)
                request.session.pop('new_response', None)

            # Redirect to a new URL after processing the form
            return redirect('index')

    else:
        history = request.session.get('history', [])
        response = None
        return render(request, 'chatbot_app/index.html', {'history': history, 'response': response})

    return redirect('index')
