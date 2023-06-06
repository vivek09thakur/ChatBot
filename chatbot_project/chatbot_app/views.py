from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .chatbot_model import ChatbotModel

def chatbot_view(request):
    if request.method == 'POST':
        message = request.POST['message']
        
        # Create an instance of the chatbot model
        chatbot = ChatbotModel()
        
        # Load the trained model (you can implement this method)
        chatbot.load_model('path/to/trained_model.pkl')
        
        # Get the prediction from the chatbot model
        response = chatbot.predict([message])
        
        return render(request, 'chatbot_app/chatbot.html', {'response': response})
    
    return render(request, 'chatbot_app/chatbot.html')
