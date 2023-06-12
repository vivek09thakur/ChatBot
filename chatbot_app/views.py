from django.shortcuts import render, redirect
from .chatbot_model import ChatbotModel

chatbot = ChatbotModel()

def chatbot_view(request):
    if request.method == 'POST':
        message = request.POST.get('message', '').strip()

        if message:
            response = chatbot.generate_response(message)
            history = request.session.get('history', [])
            history.append({'message': message, 'response': response})
            request.session['history'] = history

            # Redirect to a new URL after processing the form
            return redirect('index')

    # If the request method is not POST or after successful form submission, return the current history without generating a response
    history = request.session.get('history', [])
    response = None

    return render(request, 'chatbot_app/index.html', {'history': history, 'response': response})
