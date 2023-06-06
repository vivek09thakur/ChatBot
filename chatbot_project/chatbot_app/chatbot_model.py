from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import joblib


class ChatbotModel:
    def __init__(self):
        self.vectorizer = TfidfVectorizer()
        self.X_train_tfidf = None
        self.y_train = None
    
    def train(self, X, y):
        self.y_train = y
        self.X_train_tfidf = self.vectorizer.fit_transform(X)
    
    def predict(self, X):
        X_tfidf = self.vectorizer.transform(X)
        scores = cosine_similarity(X_tfidf, self.X_train_tfidf)
        predicted_indices = np.argmax(scores, axis=1)
        predicted_responses = [self.y_train[idx] for idx in predicted_indices]
        return predicted_responses
    
    def save_model(self, model_path):
        joblib.dump(self, model_path)
    
    def load_model(self,model_path):
        loaded_model = joblib.load(model_path)
        self.vectorizer = loaded_model.vectorizer
        self.X_train_tfidf = loaded_model.X_train_tfidf
        self.y_train = loaded_model.y_train


chatbot = ChatbotModel()

X_train = [
    "Hello",
    "What is your name?",
    "Who created you?",
    "Who owns you?",
    "What things you can do?",
    "How are you?",
    "Bye",
]

y_train = [
    "Hey",
    "As an AI, I don't have any specific name, but you can call me JERN, Just an Experimental response network",
    "I was created by Vivek Thakur",
    "I am an AI, so I don't have any specific owner",
    "What things would you like me to do?",
    "I'm good, and you?",
    "Take care, Hare Krishna",
]

chatbot.train(X_train, y_train)
model_path = './model.pkl'
chatbot.save_model(model_path)
