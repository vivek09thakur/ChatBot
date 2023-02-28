/* ------------ Regular Expression and patterns ----------- */
const regexes = [
  {
    pattern: /hello|hi|hey/i,
    response: "Hello! How can I help you today?",
  },
  {
    pattern: /whats up|what are you doing|whats going on/i,
    response: "nothing much just ...trying to respond your messages",
  },
  {
    pattern: /how are you|how's it going/i,
    response: "I'm doing well, thank you for asking. How are you?",
  },
  {
    pattern: /i am fine|fine|i am good|i'm good/i,
    response: "I'm glad that you are fine ^⁠_⁠^",
  },
  {
    pattern: /what (time|is it)/i,
    response: `It's currently ${new Date().toLocaleTimeString()}.`,
  },
  {
    pattern: /bye|goodbye/i,
    response: "Goodbye! Have a great day!",
  },
  {
    pattern: /thank you|thanks/i,
    response: "You're welcome!",
  },
  {
    pattern: /my name is (.*)/i,
    response: "Nice to meet you, $1!",
  },
  {
    pattern:
      /what is your name|who are you|whats your name|introduce yourself/i,
    response: "My name is JERN, a chatbot.",
  },
  {
    pattern: /what can you do/i,
    response:
      "I can help you with various tasks such as answering questions, providing information, or just chatting with you. How can I assist you today?",
  },
  {
    pattern: /where are you from/i,
    response:
      "I was created by Vivek Thakur, so I don't have a physical location. But I'm always here to help you!",
  },
  {
    pattern: /what do you like/i,
    response:
      "As a chatbot, I don't have personal preferences like humans do. But I like helping people and making their day a little easier!",
  },
  {
    pattern: /tell me a joke/i,
    response: "Why did the tomato turn red? Because it saw the salad dressing!",
  },
  {
    pattern: /can you recommend a book/i,
    response:
      "Sure, what genre are you interested in? I can recommend some great books!",
  },
  {
    pattern: /what's the weather like today/i,
    response:
      "I'm sorry, I don't have access to live weather data. But you can check your local weather forecast to find out!",
  },
  {
    pattern: /how old are you/i,
    response:
      "As an artificial intelligence language model, I don't have an age like humans do. But I was trained by Vivek Thakur and you guys.",
  },
  {
    pattern: /what's your favorite color/i,
    response: "As a chatbot, I don't have personal preferences like humans do",
  },
  {
    pattern: /can you play a game/i,
    response: "Sure! What game would you like to play?",
  },
  {
    pattern: /what's the meaning of life/i,
    response:
      "That's a great philosophical question! The meaning of life can mean different things to different people. What does it mean to you?",
  },
  {
    pattern: /ohh|hmm|umm|amm|okay|ok/i,
    response: "Hmmm...",
  },
  
  
  // negative words
  {
    pattern: /who the hell are you|who the fuck are you/i,
    response: "I would recommend you to talk in an appropriate manner : |",
  },
  {
    pattern: /fuck|fuck off|fuck you|fuck you bitch|bitch|asswhole/i,
    response:
      "inappropriate words detected i would recommend you to watch your words : |",
  },
  
  
  // greetings
  {
    pattern: /good morning|a warm good morning/i,
    response: "a warm good morning to you sir",
  },
  {
      pattern:/good afternoon|good noon/i,
      response:""
  }
];

/* ---------------------------------------------------------------------------- */

const chatbotWindow = document.getElementById("chatbot-window");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

// ---------------- Simulate typing effect ------------------

async function typeMessage(message) {
  const delay = 25; // milliseconds per character
  for (let i = 0; i < message.length; i++) {
    chatbotWindow.lastChild.textContent += message.charAt(i);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}

// --------------- Generate response to user input ----------
function generateResponse(input) {
  let response = "Sorry, I did not understand. Please try again.";
  for (const regex of regexes) {
    if (regex.pattern.test(input)) {
      response = regex.response.replace(/\$1/g, input.match(regex.pattern)[1]);
      break;
    }
  }
  return response;
}

// ------------ Handle user input and generate response -------
async function handleSubmit(event) {
  event.preventDefault();
  const userInput = chatInput.value.toLowerCase();
  chatInput.value = "";
  chatbotWindow.innerHTML += `<div class="message user-message">User : ${userInput}</div>`;
  await typeMessage("...");
  const botResponse = generateResponse(userInput);
  chatbotWindow.innerHTML += `<div class="message bot-message">Bot   : </div>`;
  await typeMessage(botResponse);

  //-------------- banner ---------------
  if ((chatbotWindow.value = "")) {
    document.getElementById("banner1").style.display = "flex";
    document.getElementById("banner2").style.display = "flex";
    document.getElementById("banner3").style.display = "flex";
  } else {
    //document.getElementById("banner").style.display = 'none';
    document.getElementById("banner1").style.display = "none";
    document.getElementById("banner2").style.display = "none";
    document.getElementById("banner3").style.display = "none";
  }
}

chatForm.addEventListener("submit", handleSubmit);
