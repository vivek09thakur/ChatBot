from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .chatbot_model import ChatbotModel

def chatbot_view(request):
    
    if request.method == 'POST':
        message = request.POST['message']
        chatbot = ChatbotModel()
        chatbot.load_model('./model.pkl')
        
        # Get the prediction from the chatbot model
        response = chatbot.predict([message])
        history = request.session.get('history', [])
        history.append({'message': message, 'response': response})
        request.session['history'] = history
        
        return render(request, 'chatbot_app/chatbot.html', {'history': history})
        
        # return render(request, 'chatbot_app/chatbot.html', {'response': response})
    
    return render(request, 'chatbot_app/chatbot.html')
