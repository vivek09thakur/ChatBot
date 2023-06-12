import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json

with open('data/training_data.json') as f:
    data = json.load(f)

training_data = data['input']
responses = data['responses'] 
default_response = data['default']

class ChatbotModel:

    def __init__(self):
        self.vectorizer = CountVectorizer()
        self.X = self.vectorizer.fit_transform(training_data)
        self.y = list(range(len(training_data)))

    def generate_response(self, prompt):
        message_bow = self.vectorizer.transform([prompt])
        response_idx = cosine_similarity(message_bow, self.X).argmax()
        similarity_score = cosine_similarity(message_bow, self.X).max()

        if similarity_score > 0.75 :
            return responses[response_idx]
        else :
            return default_response
        

# chatbot = ChatbotModel()
# while True:
#     user = input('> ')
#     response = chatbot.generate_response(user)
#     print(type(response))
#     print(response)
