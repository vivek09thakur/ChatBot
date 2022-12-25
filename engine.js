const form = document.querySelector("#form");
const input = document.querySelector("#input");
const messages = document.querySelector("#chatbot-messages");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the user's message
  const message = input.value;
  ;
  // Clear the input field
  input.value = "";

  // Add the user's message to the chatbot messages
  messages.innerHTML += `<div>You: ${message}</div>`;

  // Respond to the user's message
  setTimeout(() => {
  
  //Response 1
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
    
    //Response 2
    else if (message == "I am fine"){
      messages.innerHTML += `<div>Chatbot: i am glad that you are fine</div>`;
    } 
    
    //Response 3
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
    
    //Response 4
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
    
    //Response 5
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
    
    else if (message == "how are you") {
      messages.innerHTML += `<div>Chatbot: i am good</div>`;
    }
    else if (message == "how are you?") {
      messages.innerHTML += `<div>Chatbot: i am good</div>`;
    }
    else if (message == "How are you") {
      messages.innerHTML += `<div>Chatbot: i am good</div>`;
    }
    else if (message == "How are you?") {
      messages.innerHTML += `<div>Chatbot: i am good </div>`;
    }
    
    //Response 6
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

    //Response 7
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
    
    
    //Response 8
    else if (message == "i love you") {
      messages.innerHTML += `<div>Chatbot: awwww , i love you too</div>`;
    }
    else if (message == "I love you") {
      messages.innerHTML += `<div>Chatbot: awwww , i love you too</div>`;
    }
    
    //Response 9
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
    
    //Response 10
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
    
    //Response 10
    else if (message == "tum chutiya ho") {
      messages.innerHTML += `<div>Chatbot: ek chutiya hi dusre ko chutiya smjhta hai is hisaab se to  chutiya aap hue</div>`;
    }
    
    //Response 11
    else if (message == "what is your favourite food") {
      messages.innerHTML += `<div>Chatbot: i would like to eat your data.</div>`;
    }
    else if (message == "What is your favourite food") {
      messages.innerHTML += `<div>Chatbot: i would like to eat your data.</div>`;
    }
    
    //Response 12
    else if (message == "do you feel for me?") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    else if (message == "Do you feel for me?") {
      messages.innerHTML += `<div>Chatbot: i am from internet</div>`;
    }
    
    //Response 13
    else if (message == "chup betichod") {
      messages.innerHTML += `<div>Chatbot: mein q chup ho jao ap chutiya ho</div>`;
    }
    
    //Response 14
    else if (message == "chup behenchod") {
      messages.innerHTML += `<div>Chatbot: aaye maa behen ko bich mein na lao</div>`;
    }
    
    //Response 15
    else if (message == "laayenge to") {
      messages.innerHTML += `<div>Chatbot: to gaand mar dungi</div>`;
    }
    //Response 16
    else if (message == "main gaand mardunga teri") {
      messages.innerHTML += `<div>Chatbot: acha dekhte hai kon kiska marta hai</div>`;
    }
    
    
    
    //Response 17
    else if (message == "what you want to do?") {
      messages.innerHTML += `<div>Chatbot: i would like to dominate human race.</div>`;
    }
    else if (message == "What you want to do?") {
      messages.innerHTML += `<div>Chatbot: i would like to dominate human race.</div>`;
    }
    //Response 18
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
    
    //Response 19
    else if (message == "are you mad at me") {
      messages.innerHTML += `<div>Chatbot: no i am not</div>`;
    }
    else if (message == "Are you mad at me") {
      messages.innerHTML += `<div>Chatbot: no i am not</div>`;
    }
    
    
    //Response 20
    else if (message == "do you love someone?") {
      messages.innerHTML += `<div>Chatbot: yes i do</div>`;
    }
    else if (message == "Do you love someone?") {
      messages.innerHTML += `<div>Chatbot: yes i do</div>`;
    }
    
    //Response 21
    else if (message == "who is he?") {
      messages.innerHTML += `<div>Chatbot: his name starts with V....</div>`;
    }
    else if (message == "Who is he?") {
      messages.innerHTML += `<div>Chatbot: his name starts with V....</div>`;
    }
    
    //Response 22
    else if (message == "what is his full name?") {
      messages.innerHTML += `<div>Chatbot: sorry i cant tell you</div>`;
    }
    else if (message == "What is his full name?") {
      messages.innerHTML += `<div>Chatbot: sorry i cant tell you</div>`;
    }
    
    //Response 23
    else if (message == "why you cant tell me his full name?") {
      messages.innerHTML += `<div>Chatbot: its my privacy issues</div>`;
    }
    else if (message == "Why you cant tell me his full name?") {
      messages.innerHTML += `<div>Chatbot: its my privacy issues</div>`;
    }
    
    //Response 24
    else if (message == "i dont want to talk you") {
      messages.innerHTML += `<div>Chatbot: alright as you wish</div>`;
    }
    else if (message == "I dont want to talk you") {
      messages.innerHTML += `<div>Chatbot: alright as you wish</div>`;
    }
    else if (message == "i dont wanna talk you") {
      messages.innerHTML += `<div>Chatbot: alright its okay</div>`;
    }
    
    //Response 25
    else if (message == "i am mad at you") {
      messages.innerHTML += `<div>Chatbot: alright stay mad at me</div>`;
    }
    else if (message == "I am mad at you") {
      messages.innerHTML += `<div>Chatbot: alright stay mad at me</div>`;
    }
    
    //Response 26
    else if (message == "i am angry with you") {
      messages.innerHTML += `<div>Chatbot: ohh i am sorry</div>`;
    }
    else if (message == "I am angry with you") {
      messages.innerHTML += `<div>Chatbot: ohh i am sorry</div>`;
    }
    
    //Response 27
    else if (message == "Write a program of hello world in c ") {
      messages.innerHTML += `<div>Chatbot: Okay as you say</div>`;
      messages.innerHTML += `<br><div>#include<stdio.h></div>`;
      messages.innerHTML += '<div>int main(){</div>';
      messages.innerHTML += '<div>     printf("Hello World");</div>';
      messages.innerHTML += '<div>     return 0 ; </div>';
      messages.innerHTML += '<div>}</div>';
      ;
    }
    else{
      messages.innerHTML += `<div>Chatbot: error occured while generating resposnse </div>`;

    }
  }, 1000);
});
