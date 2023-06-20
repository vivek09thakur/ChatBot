import json
import numpy as np
import os
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB


class ChatbotModel:
    
    def __init__(self, training_data_file):
        self.training_data_file = training_data_file
        self.vectorizer = CountVectorizer(tokenizer=self.tokenize)
        self.classifier = MultinomialNB()
        self.load_or_train_model()


    def load_or_train_model(self):
        model_file = './saved_model/vs23-08.pkl'
        if os.path.exists(model_file):
            self.vectorizer = np.load('./saved_model/vectorizer.npy', allow_pickle=True).item()
            self.classifier = np.load(model_file, allow_pickle=True).item()
        else:
            self.train_model()
            np.save('./saved_model/vectorizer.npy', self.vectorizer)
            np.save(model_file, self.classifier)
    
    def train_model(self):
        with open(self.training_data_file, 'r') as f:
            training_data = json.load(f)

        patterns = []
        labels = []

        for intent in training_data['intents']:
            patterns.extend(intent['text'])
            labels.extend([intent['tag']] * len(intent['text']))

        X_train = self.vectorizer.fit_transform(patterns)
        y_train = np.array(labels)

        self.classifier.fit(X_train, y_train)

    def generate_response(self, text):
        X_test = self.vectorizer.transform([text])
        predicted_label = self.classifier.predict(X_test)
        label = predicted_label[0]
        
        with open(self.training_data_file, 'r') as f:
            training_data = json.load(f)
        
        for intent in training_data['intents']:
            if intent['tag'] == label:
                return np.random.choice(intent['responses'])
    
    @staticmethod
    def tokenize(text):
        return text.split()
