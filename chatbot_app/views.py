from django.shortcuts import render, redirect
import json
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

with open('./database/intents.json') as f:
    data = json.load(f)

training_data = data['prompts']
responses = data['responses']

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(training_data)
y = list(range(len(training_data)))

def get_best_response(message):
    message_bow = vectorizer.transform([message])
    similarity_scores = cosine_similarity(message_bow, X)
    best_idx = np.argmax(similarity_scores)
    best_score = similarity_scores[0][best_idx]

    if best_score >= 0.5:
        response = responses[best_idx]
    else:
        response = None

    return response

def add_new_response(message, new_response):
    data['prompts'].append(message)
    data['responses'].append(new_response)
    with open('./database/intents.json', 'w') as f:
        json.dump(data, f)

def chatbot_view(request):
    try:
        if request.method == 'POST':
            message = request.POST.get('message', '').strip()
            new_response = request.POST.get('new_response', '').strip()

            if message:
                response = get_best_response(message)

                if response is None:
                    response = 'Sorry, but I am not able to respond to this kind of prompt. If you would like, you can teach me how to respond to it.'

                    if new_response:
                        add_new_response(message, new_response)
                        response = 'Thanks for teaching me something new!'

                history = request.session.get('history', [])
                history.append({'message': message, 'response': response})
                request.session['history'] = history

                return redirect('home')

            if 'delete_history' in request.POST:
                del request.session['history']
                return redirect('home')

        history = request.session.get('history', [])
        response = None
        return render(request, 'chatbot_app/index.html', {'history': history, 'response': response})

    except Exception:
        return redirect('home')
