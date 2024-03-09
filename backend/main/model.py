import json
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class ChatBot:
    def __init__(self):
        self.err_msgs = ["I'm sorry, I couldn't understand what you said could you please rephrase that?",
            "I didn't get that, could you please try again with different prompt or rephrase it for me?",
            "I didn't understand that, could you please try again? Maybe its not in my vocabulary yet.",
            "I didn't get that, could you please try again with different prompt or rephrase it for me?",
            "I think I'm not understanding you, could you please try again? Maybe its not in my training data yet.",
            "Sorry I didn't get that, could you please try again with different prompt or rephrase it for me?",
            "Oops! I didn't understand that, could you please try again? Maybe its not in my vocabulary yet.",
            "I am sorry, I didn't understand that, could you please try again with different prompt or rephrase it for me?"]
    
    def load_data(self, path):
        with open(path,'r') as f:
            self.data = json.load(f)
        self.sentences = list(self.data.keys())
        
    def train(self):
        self.vectorizer = TfidfVectorizer()
        self.X = self.vectorizer.fit_transform(self.sentences)
        
    def predict(self, query):
        try:
            Y = self.vectorizer.transform([query])
            scores = cosine_similarity(self.X,Y)
            index = np.argmax(scores)

            responses = self.data[self.sentences[index]]
            return_seq = np.random.choice(responses)
            if scores[index][0] < 0.4:
                return_seq = np.random.choice(self.err_msgs)
            return return_seq
        
        except Exception as e:
            return np.random.choice(self.err_msgs)