import numpy as np
from django.shortcuts import render, redirect
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json

# Load the training data from the JSON file
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

            if response_idx < len(responses):

                if similarity_score < 0.75:
                    response = default_response
                    prompt = training_data[-1]  # Get the last input as the prompt

                    # Append the prompt to the input list
                    training_data.append(prompt)

                    # Append the message as the response
                    responses.append(message)

                    # Update the data dictionary
                    data['input'] = training_data
                    data['responses'] = responses

                    # Update the JSON file with the new data
                    with open('data/training_data.json', 'w') as f:
                        json.dump(data, f)

                else:
                    response = responses[response_idx]

                    # Append the message as the prompt for the next input
                    training_data.append(message)

                    # Update the data dictionary
                    data['input'] = training_data

                    # Update the JSON file with the new data
                    with open('data/training_data.json', 'w') as f:
                        json.dump(data, f)
            else:
                response = default_response

            history = request.session.get('history', [])
            history.append({'message': message, 'response': response})
            request.session['history'] = history

            return redirect('index')

    history = request.session.get('history', [])
    response = None

    return render(request, 'chatbot_app/index.html', {'history': history, 'response': response})
