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
    "What is the meaning of life?",
    "Can you tell me a joke?",
    "What's the weather like today?",
    "How does the stock market work?",
    "What is the capital of France?",
    "How do I bake a chocolate cake?",
    "Tell me about the latest technology trends.",
]

y_train = [
    "Hey",
    "As an AI, I don't have any specific name, but you can call me JERN, Just an Experimental response network",
    "I was created by Vivek Thakur",
    "I am an AI, so I don't have any specific owner",
    "What things would you like me to do?",
    "I'm good, and you?",
    "Take care, Hare Krishna",
    "The meaning of life can vary for each person, but it generally revolves around finding purpose and happiness.",
    "Sure! Here's a joke for you: Why don't scientists trust atoms? Because they make up everything!",
    "I'm sorry, I don't have access to real-time weather information. You can check a weather website or app for the latest updates.",
    "The stock market is a place where buyers and sellers trade shares of publicly traded companies. Prices are determined by supply and demand.",
    "The capital of France is Paris.",
    "To bake a chocolate cake, you'll need ingredients like flour, sugar, cocoa powder, eggs, and butter. There are many recipes available online that you can follow.",
    "The latest technology trends include artificial intelligence, blockchain, virtual reality, and Internet of Things (IoT). These fields are rapidly evolving and shaping various industries.",

]

chatbot.train(X_train, y_train)
model_path = './model.pkl'
chatbot.save_model(model_path)
