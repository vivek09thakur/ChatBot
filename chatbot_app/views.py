from django.shortcuts import render, redirect
import json
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

with open('./database/intents.json') as f:
    data = json.load(f)

training_data = data['prompts']
responses = data['responses']

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(training_data)
y = np.array(range(len(training_data)))  # Convert y to NumPy array

clf = MultinomialNB()
clf.fit(X, y)

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
                message_bow = vectorizer.transform([message])
                confidence_scores = clf.predict_proba(message_bow)
                max_confidence = np.max(confidence_scores)
                response_idx = clf.predict(message_bow)[0]

                if max_confidence >= 0.5:
                    response = responses[response_idx]
                else:
                    response = 'Sorry, but I am not able to respond to this kind of prompt. If you would like, you can teach me how to respond to it.'

                    if new_response:
                        add_new_response(message, new_response)
                        training_data.append(message)
                        responses.append(new_response)
                        X = vectorizer.fit_transform(training_data)
                        y = np.array(range(len(training_data)))
                        clf.fit(X, y)
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
