from django.shortcuts import render, redirect
from .chatbot_model import ChatbotModel

def chatbot_view(request):
    if request.method == 'POST':
        message = request.POST.get('message', '').strip()

        if message:
            chatbot = ChatbotModel()
            chatbot.load_model('./model.pkl')
            similarity_scores = chatbot.get_similarity_score([message])
            max_similarity = similarity_scores.max()
            if max_similarity < 0.75 :
                response = 'i am sorry I did not understand'
            else:
                # Get the prediction from the chatbot model
                response = chatbot.predict([message])
            history = request.session.get('history', [])
            history.append({'message': message, 'response': response})
            request.session['history'] = history

            # Redirect to a new URL after processing the form
            return redirect('index')

    # else:
        # If the request method is not POST, return the current history without generating a response
    history = request.session.get('history', [])
    response = None

    return render(request, 'chatbot_app/index.html', {'history': history, 'response': response})