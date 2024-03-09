from flask import Flask, request, jsonify
from flask_cors import CORS
from main.model import ChatBot

app = Flask(__name__)
CORS(app)

chatbot = ChatBot()
chatbot.load_data(path='Intents.json')
chatbot.train()

@app.route('/')
def index():
    return 'ChatBot Running Well'

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    message = data['message']
    response = chatbot.predict(message)
    return jsonify({'response': response})

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS')
    return response