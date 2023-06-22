from django.shortcuts import render, redirect
import json
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

with open('./database/intents.json') as f:
    data = json.load(f)
training_data = data['prompts']
responses = data['responses']

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(training_data)
y = list(range(len(training_data)))
clf = MultinomialNB()
clf.fit(X, y)

def generate_response(message): 
    message_bow = vectorizer.transform([message])
    response_idx = clf.predict(message_bow)[0]
    return responses[response_idx]

def chatbot_view(request):

    try :
        if request.method == 'POST':
            message = request.POST.get('message', '').strip()

            if message:
                response = generate_response(message)
                history = request.session.get('history', [])
                history.append({'message': message, 'response': response})
                request.session['history'] = history

                # Redirect to a new URL after processing the form
                return redirect('home')

            if 'delete_history' in request.POST:
            # Delete the history if the delete button is clicked
                del request.session['history']
                return redirect('home')

        # If the request method is not POST, return the current history without generating a response
        history = request.session.get('history', [])
        response = None
        return render(request, 'chatbot_app/index.html', {'history': history, 'response': response})
    except Exception:
        return redirect('home')
