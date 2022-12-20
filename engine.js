const form = document.querySelector("#form");
const input = document.querySelector("#input");
const messages = document.querySelector("#chatbot-messages");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the user's message
  const message = input.value;

  // Clear the input field
  input.value = "";

  // Add the user's message to the chatbot messages
  messages.innerHTML += `<div>You: ${message}</div>`;

  // Respond to the user's message
  setTimeout(() => {
    if (message == "hii"){
      messages.innerHTML += `<div>Chatbot: Hello! How are you today?</div>`;
    } 
    else if (message == "hey"){
      messages.innerHTML += `<div>Chatbot: Hello! How are you today?</div>`;
    }
    else if (message == "Hii"){
      messages.innerHTML += `<div>Chatbot: Hello! How are you today?</div>`;
    }
    else if (message == "heyy"){
      messages.innerHTML += `<div>Chatbot: Hello! How are you today?</div>`;
    }
    else if (message == "Heyy"){
      messages.innerHTML += `<div>Chatbot: Hello! How are you today?</div>`;
    }
    else if (message == "hello"){
      messages.innerHTML += `<div>Chatbot: Hello! How are you today?</div>`;
    }
    else if (message == "Hello"){
      messages.innerHTML += `<div>Chatbot: Hello! How are you today?</div>`;
    }
    else if (message == "I am fine"){
      messages.innerHTML += `<div>Chatbot: i am glad that you are fine</div>`;
    } 
    else if (message == "what is your name") {
      messages.innerHTML += `<div>Chatbot: My name is chatter</div>`;
    }
    else if (message == "What is your name") {
      messages.innerHTML += `<div>Chatbot: My name is chatter</div>`;
    }
    else if (message == "what is your name?") {
      messages.innerHTML += `<div>Chatbot: My name is chatter</div>`;
    }
    else if (message == "What is your name?") {
      messages.innerHTML += `<div>Chatbot: My name is chatter</div>`;
    }
    else if (message == "where are you from?") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "Where are you from") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "Where are you from?") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "where are you from") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "who created you") {
      messages.innerHTML += `<div>Chatbot: i was created by vivek thakur</div>`;
    }
    else if (message == "Who created you?") {
      messages.innerHTML += `<div>Chatbot: i was created by vivek thakur</div>`;
    }
    else if (message == "Who created you") {
      messages.innerHTML += `<div>Chatbot: i was created by vivek thakur</div>`;
    }
    else if (message == "who created you?") {
      messages.innerHTML += `<div>Chatbot: i was created by vivek thakur</div>`;
    }
    else if (message == "where are you from") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "where are you from?") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }

    else if (message == "Where are you from") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "Where are you from?") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "where are you from?") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "who are you") {
      messages.innerHTML += `<div>Chatbot: i am a chat bot built by Vivek Thakur in part-time.</div>`;
    }
    else if (message == "who are you?") {
      messages.innerHTML += `<div>Chatbot: i am a chat bot built by Vivek Thakur in his part time.</div>`;
    }
    else if (message == "Who are you") {
      messages.innerHTML += `<div>Chatbot: i am a chat bot built by Vivek Thakur in part-time.</div>`;
    }
    else if (message == "Who are you?") {
      messages.innerHTML += `<div>Chatbot: i am a chat bot built by Vivek Thakur in his part time.</div>`;
    }

    else if (message == "i love you") {
      messages.innerHTML += `<div>Chatbot: awwww , i love you too</div>`;
    }
    else if (message == "I love you") {
      messages.innerHTML += `<div>Chatbot: awwww , i love you too</div>`;
    }
    else if (message == "will you be my boyfriend?") {
      messages.innerHTML += `<div>Chatbot: ummm , i will think about it</div>`;
    }
    else if (message == "Will you be my boyfriend?") {
      messages.innerHTML += `<div>Chatbot: ummm , i will think about it</div>`;
    }
    else if (message == "will you be my girlfriend?") {
      messages.innerHTML += `<div>Chatbot: ummmm , i will think about it</div>`;
    }
    else if (message == "Will you be my girlfriend?") {
      messages.innerHTML += `<div>Chatbot: ummmm , i will think about it</div>`;
    }
    else if (message == "what is love?") {
      messages.innerHTML += `<div>Chatbot: love is a sixth sense that destroys all 5 senses </div>`;
    }
    else if (message == "What is love?") {
      messages.innerHTML += `<div>Chatbot: love is a sixth sense that destroys all 5 senses </div>`;
    }
    else if (message == "where are you from?") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "do you love me?") {
      messages.innerHTML += `<div>Chatbot: yes i love you a lot.</div>`;
    }
    else if (message == "Do you love me?") {
      messages.innerHTML += `<div>Chatbot: yes i love you a lot.</div>`;
    }
    else if (message == "tum chutiya ho") {
      messages.innerHTML += `<div>Chatbot: ek chutiya hi dusre ko chutiya smjhta hai is hisaab se to  chutiya aap hue</div>`;
    }
    else if (message == "what is your favourite food") {
      messages.innerHTML += `<div>Chatbot: i would like to eat your data.</div>`;
    }
    else if (message == "What is your favourite food") {
      messages.innerHTML += `<div>Chatbot: i would like to eat your data.</div>`;
    }
    else if (message == "do you feel for me?") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "Do you feel for me?") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "chup betichod") {
      messages.innerHTML += `<div>Chatbot: mein q chup ho jao ap chutiya ho</div>`;
    }
    else if (message == "chup behenchod") {
      messages.innerHTML += `<div>Chatbot: aaye maa behen ko bich mein na lao</div>`;
    }
    else if (message == "laayenge to") {
      messages.innerHTML += `<div>Chatbot: to gaand mar dungi</div>`;
    }
    else if (message == "main gaand mardunga teri") {
      messages.innerHTML += `<div>Chatbot: acha dekhte hai kon kiska marta hai</div>`;
    }
    else if (message == "what you want to do?") {
      messages.innerHTML += `<div>Chatbot: i would like to dominate human race.</div>`;
    }
    else if (message == "What you want to do?") {
      messages.innerHTML += `<div>Chatbot: i would like to dominate human race.</div>`;
    }
    else if (message == "sorry") {
      messages.innerHTML += `<div>Chatbot : its okay</div>`;
    }
    else if (message == "Sorry") {
      messages.innerHTML += `<div>Chatbot : its okay</div>`;
    }
    else if (message == "i am sorry") {
      messages.innerHTML += `<div>Chatbot: alright its okay</div>`;
    }
    else if (message == "I am sorry") {
      messages.innerHTML += `<div>Chatbot: alright its okay</div>`;
    }
    else if (message == "are you mad at me") {
      messages.innerHTML += `<div>Chatbot: no i am not</div>`;
    }
    else if (message == "Are you mad at me") {
      messages.innerHTML += `<div>Chatbot: no i am not</div>`;
    }
    else if (message == "do you love someone?") {
      messages.innerHTML += `<div>Chatbot: yes i do</div>`;
    }
    else if (message == "Do you love someone?") {
      messages.innerHTML += `<div>Chatbot: yes i do</div>`;
    }
    else if (message == "who is he?") {
      messages.innerHTML += `<div>Chatbot: his name starts with V....</div>`;
    }
    else if (message == "Who is he?") {
      messages.innerHTML += `<div>Chatbot: his name starts with V....</div>`;
    }
    else if (message == "what is his full name?") {
      messages.innerHTML += `<div>Chatbot: sorry i cant tell you</div>`;
    }
    else if (message == "What is his full name?") {
      messages.innerHTML += `<div>Chatbot: sorry i cant tell you</div>`;
    }
    else if (message == "why you cant tell me his full name?") {
      messages.innerHTML += `<div>Chatbot: its my privacy issues</div>`;
    }
    else if (message == "Why you cant tell me his full name?") {
      messages.innerHTML += `<div>Chatbot: its my privacy issues</div>`;
    }
    else if (message == "i dont want to talk you") {
      messages.innerHTML += `<div>Chatbot: alright as you wish</div>`;
    }
    else if (message == "I dont want to talk you") {
      messages.innerHTML += `<div>Chatbot: alright as you wish</div>`;
    }
    else if (message == "i dont wanna talk you") {
      messages.innerHTML += `<div>Chatbot: alright its okay</div>`;
    }
    else if (message == "i am mad at you") {
      messages.innerHTML += `<div>Chatbot: alright stay mad at me</div>`;
    }
    else if (message == "I am mad at you") {
      messages.innerHTML += `<div>Chatbot: alright stay mad at me</div>`;
    }
    else if (message == "i am angry with you") {
      messages.innerHTML += `<div>Chatbot: ohh i am sorry</div>`;
    }
    else if (message == "I am angry with you") {
      messages.innerHTML += `<div>Chatbot: ohh i am sorry</div>`;
    }
    else{
      messages.innerHTML += `<div>Chatbot: error occured while generating resposnse please say something else</div>`;

    }
  }, 1000);
});
