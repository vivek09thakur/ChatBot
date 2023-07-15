import tensorflow as tf
from keras.layers import Input, LSTM, Dense
from keras.models import Model
from tensorflow.keras.preprocessing.sequence import pad_sequences
from keras.preprocessing.text import Tokenizer
import numpy as np
import json

def train_model(input_sequences,output_sequences):

    input_seq_len = 100
    output_seq_len = 100
    vocab_size = 10000
    hidden_size = 256
    epochs = 100
    batch_size = 32
    learning_rate = 0.001

    input_layer = Input(shape=(input_seq_len,1))
    lstm_layer = LSTM(hidden_size)(input_layer)
    output_layer = Dense(output_seq_len, activation='softmax')(lstm_layer)

    model = Model(inputs=input_layer, outputs=output_layer)
    model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=learning_rate),
                  loss='categorical_crossentropy',
                  metrics=['accuracy'])

    tokenizer = Tokenizer(num_words=vocab_size, 
                          oov_token='<OOV>')
    
    tokenizer.fit_on_texts(input_sequences + output_sequences)

    input_sequences_int = tokenizer.texts_to_sequences(input_sequences)
    output_sequences_int = tokenizer.texts_to_sequences(output_sequences)

    input_sequences_padded = pad_sequences(input_sequences_int, 
                                           maxlen=input_seq_len, 
                                           padding='pre')
    output_sequences_padded = pad_sequences(output_sequences_int, 
                                            maxlen=output_seq_len, 
                                            padding='post')

    model.fit(input_sequences_padded,
              output_sequences_padded, 
              epochs=epochs,
              batch_size=batch_size)
    
    return model, tokenizer

def map_token_to_int(token, tokenizer):
    token_integer = tokenizer.word_index.get(token, 
                                             tokenizer.word_index['<OOV>'])
    return token_integer

def map_int_to_token(integer, tokenizer):
    token = tokenizer.index_word.get(integer, '<OOV>')
    return token

def preprocess_input(input_text, tokenizer):
    tokens = input_text.split()
    input_sequence = [map_token_to_int(token, tokenizer) for token in tokens]
    input_sequence = pad_sequences([input_sequence], 
                                   maxlen=100, 
                                   padding='pre')
    return input_sequence[0]

def postprocess_response(response_sequence, tokenizer):
    tokens = [map_int_to_token(integer, tokenizer) for integer in response_sequence]
    response_text = ' '.join(tokens)
    return response_text

def generate_response(input_text, model, tokenizer):
    preprocessed_input = preprocess_input(input_text, tokenizer)
    input_sequence = np.array([preprocessed_input])
    response_sequence = model.predict(input_sequence)[0]
    postprocessed_response = postprocess_response(response_sequence, tokenizer)
    return postprocessed_response

# Example usage
with open('./database/intents.json') as f:
    data = json.load(f)

input_sequences = data['prompts']
output_sequences = data['responses']

model, tokenizer = train_model(input_sequences, output_sequences)
while True:
    user_input = input("User: ")
    response = generate_response(user_input, model, tokenizer)
    print("Chatbot:", response)

