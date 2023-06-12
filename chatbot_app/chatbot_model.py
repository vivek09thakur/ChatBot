import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json


class ChatbotModel:
    def __init__(self):
        with open('data/training_data.json') as f:
            data = json.load(f)
        training_data = data['input']
        self.responses = data['responses'] 
        self.vectorizer = CountVectorizer()
        self.X = self.vectorizer.fit_transform(training_data)
        self.y = list(range(len(training_data)))

    def generate_response(self, prompt):
        message_bow = self.vectorizer.transform([prompt])
        response_idx = cosine_similarity(message_bow, self.X).argmax()
        similarity_score = cosine_similarity(message_bow, self.X).max()
        return self.responses
