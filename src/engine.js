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
    pattern: /i am fine|yeah...fine|i am good|i'm good/i,
    response: "I'm glad that you are fine ^⁠_⁠^",
  },
  {
    pattern: /not fine|i am not fine|not good today|tierd/i,
    response:
      "ohh that's sad :( , but don't worry everything will be fine ...have faith in god ^⁠_⁠^ ... he'll fix everything ◡⁠ ⁠ω⁠ ⁠◡",
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
    response: "My name is TADASHI, a chatbot.",
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
  {
    pattern: /i love you|love you|do you love me/i,
    response: "please don't talk about love here",
  },
  {
    pattern: /what is love?|what is love|what do you think about love/i,
    response:
      "ammm...a complicated topic but i think love is a sixth sense that destroys all the five sense",
  },
  {
    pattern: /will you be my boyfriend|will you be my girlfriend/i,
    response: "amm...i will think about it",
  },
  {
    pattern: /are you a boy or a girl|are you a girl|are you a boy/i,
    response:
      "as i am chatbot so my gender depends upon whom i talking right now" +
      "if you are a boy then I am also a boy" +
      "if you are a girl then hello ladies .. I am here >.< ",
  },
  {
    pattern: /am i bad|am i toxic/i,
    response:
      "heyy don't say like that... there's no one who is bad or toxic god made us and we are not bad" +
      " i know sometimes some people don't understand us they blame us and then they move away " +
      " but its not our fault so don't say that you are toxic or bad... i know everything will be fine ^⁠_⁠^ ",
  },
  {
    pattern:
      /why everyone leaves me|why they left me|why he left me|why she left me/i,
    response:
      "hmmm....i know you're hurted right now , but look not everyone stays with us forever " +
      " the person who is willing to stay with you... stays or the person who wants to leave just look out for an excues and leaves" +
      " always remember the person who genuinely loves you never leaves you" +
      "... so don't be sad one day someone will come and never leaves he or she will love you as much as you never expected .. i wish that day comes soon ^⁠_⁠^",
  },
  {
    pattern: /okay i got it|got it|dude i got it/i,
    response: "yepp...good to hear that ",
  },
  {
    pattern:/i had a bad day|my day was not so good|had a bad day/i,
    response:" ohh ...sad : ( , It\'s okay to have a bad day...i think you should rest now , we wil talk later ",
  },
  {
    pattern:/sorry|i am sorry|so sorry/i,
    response:"it's okay nevermind ^⁠_⁠^ ",
  },
  {
      pattern:/i am tired|i am pretty tired|i am pretty tired right now/i,
      response:"ohh it seems you might have a rough day...rest now we will talk later",
  },
  {
     pattern:/mad at you|angry on you|angry with you/i,
     response:
     "ohh... sorry i have done something wrong ಥ⁠‿⁠ಥ ",
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
  {
    pattern: /chutiya|chutiya ho kya|chutiya ho kya be|chutiya ai/i,
    response:
      "Ek chutiya hi dusre ko chutiya samjhta h...ap mujhe chutiya samjhte ho... to is hisaab se to ap chutiya hue",
  },
  {
    pattern: /gandu|gaandu/i,
    response: "kripya mujhe apni g*nd na de",
  },
  {
    pattern: /bsdk|bhosdaike|mc|bc/i,
    response: "sir i would recommend you to please watch your tone",
  },

  // greetings
  {
    pattern: /good morning|a warm good morning/i,
    response: "a warm good morning to you sir",
  },
  {
    pattern: /good afternoon|good noon/i,
    response: "good afternoon ^_^",
  },
  {
    pattern: /good night|sweet dreams/i,
    response: "good night boss",
  },

  // Credits to me
  {
    pattern:
      /who is your creator|who created you|by whom you were created|your creator/i,
    response: "I was created by Vivek Thakur as his part time project",
  },
  {
    pattern: /who is vivek thakur/i,
    response:
      "i don't know whom you talking about but my creator name is also Vivek Thakur",
  },

  // Devotional Thoughts
  {
    pattern: /Am I beautiful|Am I pretty|Am I handsome/i,
    response:
      "God mad us... and everything he created is beautiful ... therefore everyone is beautiful" +
      "Then who the hell made you?",
  },
  {
    pattern: /do you believe in god|do you have faith in god/i,
    response:
      "Well I say ... god is the truth and you can't deny from the truth",
  },
  {
    pattern: /who is god|who created us|who is our creator|our creator/i,
    response:
      "according to ancients... the whole universe is created by god " +
      "everything in the universe is the part of the god ...he is everything, he is the universe and he is the truth" +
      "when you go deep down of the Vedas then you'll find that the universe and vedas... you'll find that the whole multiverse is created by lord vishnu ( lord narayan)",
  },
  {
    pattern:
      /who is krishna|who is narayan|who is lord Krishna|who is lord narayan|who is god krishna|who is god narayan/i,
    response:
      "he is the supreme personality of godhead...i can't describe him in words .. i just say he is the truth and everything... say radhe radhe",
  },
  {
    pattern: /radhe radhe/i,
    response: "radhe radhe ",
  },
  {
    pattern:
      /jai shree rama|jay shree rama|jai sri rama|jay sri rama|jai shree ram|jay shree ram|jai sri ram|jay sri ram/i,
    response: "jay shree rama",
  },
  {
    pattern: /jai mata di|Jay mata di/,
    response: "jai mata di",
  },
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
  const userInput = chatInput.value.toLowerCase().replace("?", "");
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
