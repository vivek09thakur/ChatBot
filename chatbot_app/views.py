from django.shortcuts import render, redirect
from .chatbot_model import ChatbotModel

def chatbot_view(request):
    if request.method == 'POST':
        message = request.POST.get('message', '').strip()

        if message:
            chatbot = ChatbotModel('./database/intents.json')
            response = chatbot.generate_response(message)

            history = request.session.get('history', [])
            history.append({'message': message, 'response': response})
            request.session['history'] = history

            return redirect('index')

        if 'delete_history' in request.POST:
            del request.session['history']
            return redirect('index')

    history = request.session.get('history', [])
    response = None

    return render(request, 'chatbot_app/index.html', {'history': history, 'response': response})
