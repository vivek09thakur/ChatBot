from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
import joblib

class ChatbotModel:
    def __init__(self):
        self.pipeline = Pipeline([
            ('tfidf', TfidfVectorizer()),
            ('clf', LogisticRegression())
        ])
    
    def train(self, X, y):
        self.pipeline.fit(X, y)
    
    def predict(self, X):
        return self.pipeline.predict(X)
    
    def load_model(self, model_path):
        self.pipeline = joblib.load(model_path)

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
    "As an AI , I don't have any specific name , but you can call me JERN , Just an Experimental response network",
    "I was created by vivek thakur",
    "I am an AI , so i don't have any specific owner",
    "What things would you like me to do?",
    "I'm good, and you?",
    "Take Care , Hare Krishna",
]

chatbot.train(X_train, y_train)
model_path = './model.pkl'
joblib.dump(chatbot, model_path)
