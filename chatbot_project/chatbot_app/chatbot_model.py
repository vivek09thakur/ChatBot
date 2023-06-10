from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import joblib
import json

training_data = 'data/training_data.json'

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

with open(training_data,'r') as f:
    data = json.load(f)
X_train = data['input']
y_train = data['responses']

chatbot.train(X_train, y_train)
model_path = './model.pkl'
chatbot.save_model(model_path)
