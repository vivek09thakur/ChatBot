import numpy as np
from django.shortcuts import render, redirect
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json


def chatbot_view(request):

    # Load the training data from the JSON file
    with open('data/training_data.json') as f:
        data = json.load(f)

    training_data = data['input']
    responses = data['responses']
    default_response = data['default']

    vectorizer = CountVectorizer()
    X = vectorizer.fit_transform(training_data)

    if request.method == 'POST':
        message = request.POST.get('message', '').strip()

        if message:
            message_bow = vectorizer.transform([message])

            # Update the X matrix with the new message
            X = np.vstack([X.A, message_bow.A])

            similarity_scores = cosine_similarity(message_bow, X)
            response_idx = similarity_scores.argmax()
            similarity_score = similarity_scores.max()

            if similarity_score < 0.75:

                response = default_response

                if response == default_response:
                    # Check if training_data is not empty
                    prompt = training_data[-1] if training_data else "" # Get the last input as the prompt

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

                    X = vectorizer.fit_transform(training_data)

            else:
                response = responses[response_idx]

                # Append the message as the prompt for the next input
                training_data.append(message)

                # Update the data dictionary
                data['input'] = training_data

                # Update the JSON file with the new data
                with open('data/training_data.json', 'w') as f:
                    json.dump(data, f)

            history = request.session.get('history', [])
            history.append({'message': message, 'response': response})
            request.session['history'] = history

            return redirect('index')

    history = request.session.get('history', [])
    response = None

    return render(request, 'chatbot_app/index.html', {'history': history, 'response': response})
