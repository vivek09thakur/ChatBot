import numpy as np
from django.shortcuts import render, redirect
from .chatbot_model import ChatbotModel
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json

with open('data/training_data.json') as f:
    data = json.load(f)

training_data = data['input']
responses = data['responses'] 
default_response = data['default']

def chatbot_view(request):
    vectorizer = CountVectorizer()
    X = vectorizer.fit_transform(training_data)

    if request.method == 'POST':
        message = request.POST.get('message', '').strip()

        if message:
            message_bow = vectorizer.transform([message])
            response_idx = cosine_similarity(message_bow, X).argmax()
            similarity_score = cosine_similarity(message_bow, X).max()

            if similarity_score < 0.75 :

                response = default_response
                prompt = message
                # Adding the training data file
                with open('data/training_data.json') as f:
                    data = json.load(f)
                data['input'].append(prompt)
                # learns the data
                with open('data/training_data.json' , 'w') as f:
                    json.dump(data,f)

                new_prompt = request.POST.get('message','').strip()

                # Adding the training data file
                with open('data/training_data.json') as f:
                    data = json.load(f)
                # Appending new_prompt as responses
                data['responses'].append(new_prompt)
                # learns the data
                with open('data/training_data.json' , 'w') as f:
                    json.dump(data,f)
                    
            else :
                response = responses[response_idx]

            history = request.session.get('history', [])
            history.append({'message': message, 'response': response})
            request.session['history'] = history

            return redirect('index')

    history = request.session.get('history', [])
    response = None

    return render(request, 'chatbot_app/index.html', {'history': history, 'response': response})
