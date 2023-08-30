import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
import json

class AI:
    
    def __init__(self,training_data):
        self.training_data = training_data
        with open(training_data) as f:
            data = json.load(f) 
        self.intents = data['intents']
        
        with open(self.training_data) as f:
            data = json.load(f)
            
        self.patterns = []
        self.responses = []
        
        self.intents = data['intents']
        for intent in self.intents:
            for intent in self.intents:
                for pattern in intent['patterns']:
                    self.patterns.append(pattern)
        # print(self.patterns)
        
        for intent in self.intents:
            for intent in self.intents:
                for pattern in intent['responses']:
                    self.responses.append(self.responses)
        # print(self.responses)
                
    def generate_response(self,user_input):
        for user_input in self.patterns:
            if user_input in self.patterns:
                response_idx = self.patterns.index(user_input)
                break
        return self.responses[response_idx]
    
bot = AI('./AI/model/dataset/intents/intents.json')
print(bot.generate_response('hello'))