import numpy as np
from sklearn import linear_model
import sklearn.feature_extraction.text as text
import json

def load_intents(file_name):
    with open(file_name, "r") as f:
        intents = json.load(f)
    return intents['intents']

def train_model(intents):
    # train the Model
    feature_vectors = []
    responses = []
    confidences = []

    for intent in intents:
        for pattern in intent["patterns"]:
            feature_vectors.append(pattern)
            response = intent["responses"][0]
            confidence = 0.9
            responses.append(response)
            confidences.append(confidence)

    vectorizer = text.TfidfVectorizer()
    features = vectorizer.fit_transform(feature_vectors)

    model = linear_model.LogisticRegression()
    model.fit(features, responses, confidences)
    model.vectorizer = vectorizer

    return model

def generate_response(model, input_text):
    # generates the response
    feature = model.vectorizer.transform([input_text])
    predicted_response = model.predict(feature)[0]
    # get the confidence
    confidence = np.max(model.predict_proba(feature))
    if confidence < 0.5:
        default_response = '''Sorry, but I don't know how to respond yet.
        Can you try another prompt or provide more context or information?'''
        return default_response

    return predicted_response
