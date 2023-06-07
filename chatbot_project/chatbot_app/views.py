from django.shortcuts import render
from .chatbot_model import ChatbotModel

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
        else:
            # If no message is provided, return the current history
            history = request.session.get('history', [])

        return render(request, 'chatbot_app/chatbot.html', {'history': history, 'response': response})

    return render(request, 'chatbot_app/chatbot.html')
