import tensorflow as tf
import numpy as np
from keras.utils.data_utils import pad_sequences
import json
import os


class ChatbotModel:
    
    def __init__(self, training_data_file):
        self.training_data_file = training_data_file
        self.word_to_int = {}
        self.padded_data = None
        self.label_to_int = {}
        self.responses = []
        self.model = None
        self.load_or_train_model()


    def load_or_train_model(self):
        model_file = './saved_model/vs2306.h5'
        if os.path.exists(model_file):
            self.model = tf.keras.models.load_model(model_file)
            with open('./database/chat_log.json', 'r') as f:
                data = json.load(f)
                self.word_to_int = data['word_to_int']
                self.padded_data = np.array(data['padded_data'])
                self.label_to_int = data['label_to_int']
                self.responses = data['responses']
        else:
            self.train_model()
            self.model.save(model_file)
            data = {
                'word_to_int': self.word_to_int,
                'padded_data': self.padded_data.tolist(),
                'label_to_int': self.label_to_int,
                'responses': self.responses
            }
            with open('./database/chat_log.json', 'w') as f:
                json.dump(data, f)
    
    def train_model(self):
        with open(self.training_data_file, 'r') as f:
            training_data = json.load(f)

        patterns = []
        labels = []
        responses = []

        for intent in training_data['intents']:
            patterns.extend(intent['text'])
            labels.extend([intent['tag']] * len(intent['text']))
            responses.extend(intent['responses'])

        unique_words = list(set(" ".join(patterns).split()))
        self.word_to_int = {word: i for i, word in enumerate(unique_words)}
        int_encoded_data = [[self.word_to_int[word] for word in sentence.split()] for sentence in patterns]
        
        max_length = max([len(sentence) for sentence in int_encoded_data])
        self.padded_data = pad_sequences(int_encoded_data, maxlen=max_length, padding='post')

        self.label_to_int = {label: i for i, label in enumerate(set(labels))}
        int_encoded_labels = [self.label_to_int[label] for label in labels]
        self.responses = responses

        self.model = tf.keras.Sequential([
            tf.keras.layers.Embedding(len(unique_words), 512, input_length=max_length),
            tf.keras.layers.Flatten(),
            tf.keras.layers.Dense(200, activation="relu"),
            tf.keras.layers.Dense(len(set(labels)), activation="softmax")
        ])

        self.model.compile(loss="sparse_categorical_crossentropy", optimizer="adam", metrics=["accuracy"])
        self.model.fit(np.array(self.padded_data), np.array(int_encoded_labels),epochs=5000)

    def generate_response(self, text):
        int_encoded_text = [self.word_to_int[word] for word in text.split() if word in self.word_to_int]
        padded_text = pad_sequences([int_encoded_text], maxlen=len(self.padded_data[0]), padding='post')
        predicted_label = self.model.predict(np.array(padded_text))[0]
        max_prob_index = np.argmax(predicted_label)
        for label, int_label in self.label_to_int.items():
            if int_label == max_prob_index:
                return self.responses[int_label]


# bot = ChatbotModel('./database/intents.json')  # Comment out or remove this line
