from flask import Flask, request, jsonify
from flask_cors import CORS
from model.model import ChatBot

app = Flask(__name__)
CORS(app)

chatbot = ChatBot()
chatbot.load_data(path='model/intents.json')
chatbot.train()

@app.route('/predict', methods=['POST'])
def predict():
    query = request.json['query']
    response = chatbot.predict(query)
    return jsonify({'response': response})

    
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS')
    return response