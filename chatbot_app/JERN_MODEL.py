import json
import random

with open('database/intents.json') as file:
    data = json.load(file)

intents = data['intents']
pairs = []

for intent in data['intents']:
    for pattern in intent['patterns']:
        pairs.append((pattern, intent['responses']))

def generate_response(user_input):

    for pattern, responses in pairs:
        if pattern in user_input:
            return random.choice(responses)
        else:
            return "sorry but i didn\'t understand , can you repeat or try a different prompt?"