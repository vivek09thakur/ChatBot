import json
import random

class Jern:
    
    def __init__(self,training_data_path):
        self.training_data_path = training_data_path
        with open(self.training_data_path) as json_data:
            self.data = json.load(json_data)
        
        self.intents = {}
        for intent in self.data['intents']:
            for pattern in intent['patterns']:
                self.intents[pattern] = intent['responses']
        
    def generate_response(self,user_input):
        try:
            user_input = str(user_input)
            for pattern in self.intents:
                if pattern in user_input.lower():
                    return random.choice(self.intents[pattern])

            return "I don't understand"
        except Exception as e:
            return "I don't understand"
        
# if __name__=='__main__':
#     bot = Jern('./jern/dataset/intents.json')
#     while True:
#         user = input("You: ")
#         response = bot.generate_response(user)
#         print("Bot: ",response)
        
        