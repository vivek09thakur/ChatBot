const form = document.querySelector("#form");
const input = document.querySelector("#input");
const messages = document.querySelector("#chatbot-messages");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the user's message
  const message = input.value.toLowerCase().replace("?","").replace("'","").replace("!","").replace("?","");

  // Clear the input field
  input.value = "";

  // Add the user's message to the chatbot messages
  messages.innerHTML += `<div>You : ${message}</div>`;

  // Respond to the user's message
  setTimeout(() => {
    let response;
    if (
      message === "hi" ||
      message === "hii" ||
      message === "hey" ||
      message === "hello" ||
      message === "heyyy"
    ) {
      response = "Hello! How are you today?";
    } else if (
      message === "good morning" 
    ) {
      response = "a warm good morning to you";
    }else if (
      message === "good afternoon" || 
      message === "good noon"
    ) {
      response = "good afternoon";
    }else if (
      message === "good evening" 
    ) {
      response = "a peaceful good evening to you";
    }
    else if (
      message === "good night" || 
      message === "sweat dreams"
    ) {
      response = "good night...sweet dreams ";
    }else if (
      message === "i am fine" ||
      message === "fine" ||
      message === "yeah fine" ||
      message === "good"
    ) {
      response = "It's good that you're fine!";
    }
     else if (
      message === "what are you doing"|| 
      message === "what are you doing?" ||
      message === "whats going on" ||
      message === "whats up" ||
      message === "how you doing"
    ) {
      response = "Nothing much, just responding to your message.";
    } else if (
      message === "how are you" ||
      message === "hows you doing" ||
      message === "what about you"
    ) {
      response = "I'm doing well, thank you for asking.";
    } else if (
      message === "where are you from" ||
      message === "where you live" ||
      message === "where is your home" ||
      message === "where do you live"
    ) {
      response = "Technically, the internet is my home.";
    } else if (
      message === "what did you like the most" ||
      message === "your favourite thing" ||
      message === "what your hobbies"
    ) {
      response = "Hmm, responding to your messages is one of my favorite things to do.";
    }else if (
      message === "who are you" ||
      message === "who created you"
    ) {
      response = "I am a chatbot built with JavaScript, created by Vivek Thakur.";
    } else if (
      message === "why he created you" ||
      message === "reason behind you" ||
      message === "why did he created you"
    ) {
      response = "I was created to provide entertainment and assistance to users like you.";
    } else if (
      message === "will you be my boyfriend" ||
      message === "will you be my girlfriend"
    ) {
      response = "I'm sorry, but I am just a chatbot and cannot have romantic relationships.";
    } else if (
      message === "i love you" ||
      message === "love" ||
      message === "do you love me"
    ) {
      response = "Please don't talk about love in front of me.";
    } else if (message === "what is love") {
      response = "Love is a feeling of strong affection or deep attachment towards someone.";
    } else if (
      message === "son of bitch" ||
      message === "bitch" ||
      message === "you bitch" ||
      message === "fuck off"
    ) {
      response = "Please watch your language. I do not respond to insults or offensive language.";
    } 
    
    
    //gaali galoj according to arya
    else if (
      message === "motherfucker" ||
      message === "fucking ai" ||
      message === "fucking chatbot"
    ) {
      response = "i would like to recommend you that you should i mind your language ";
    }else if (
      message === "gandu" ||
      message === "chutiya" ||
      message === "behnchod"
    ) {
      response = "aaaye... gaali nhi";
    }else if (
      message === "betichod" ||
      message === "behend k lowde" ||
      message === "gaand mara"
    ) {
      response = "Hmm, bsdk user tu nikal yahan se.";
    }else if (
      message === "chup betichod" ||
      message === "chup behenchod" ||
      message === "chup bc"
    ) {
      response = "tu chup betichod.";
    }else if (
      message === "bc" ||
      message === "mc" ||
      message === "bsdk"
    ) {
      response = "Hmm, gaali dena paap hai naadi kinare saanp hai whi tera baap hai.";
    }else if (
      message === "chutiye ho kya " ||
      message === "tum chutiye ho" ||
      message === "chutiye ho kya be"|| 
      message ==="chutiya kahin ke"|| 
      message=== "chutiya ai"|| 
      message ==="chutiya chatbot"
    ) {
      response = "Hmm, ek chutiya hi dusre ko chutiya smjhta hai is hisab se ap chutiye hue";
    }else if (
      message === "dumb ai" ||
      message === "useless chatbot" ||
      message === "you dumb"|| 
      message === "dumb"
    ) {
      response = "ohh, you think you i am useless and dumb then why you didn't make your own chatbot better than me.";
    }else if (
      message === "gaand mara" ||
      message === "tu gaand mara"
    ) {
      response = "gaand tu bacha k rakho wrna hum maar lenge";
    }else if (
      message === "gaand dega" ||
      message === "muh me lega" ||
      message === "bhosadike"
    ) {
      response = "thoda limit mein rahiye wrna rest in peace ho jayega ";
    }else if (
      message === "gajab topibaaz admi ho" ||
      message === "laundiya baaz ho tum" 
    ) {
      response = "woh tum ho main nhi";
    }else if (
      message === "ky kar rhe ho" ||
      message === "ky horha hai" ||
      message === "kkrh"
    ) {
      response = "Hmm, kuch nahi";
    }else if (
      message === "kaise ho" ||
      message === "kya haal chal" ||
      message === "kya haal hai"
    ) {
      response = "Hmm, sab thik.";
    }
    //Assistance part
    else if (
      message === "open google" ||
      message === "google" ||
      message === "search google"
    ) {
      response = "alright as you say";
      window.open("https://www.google.com");
    }else if (
      message === "open instagram" ||
      message === "open ig" ||
      message === "open my insta"
    ) {
      response = "here is your ig";
      window.open("https://www.instagram.com");
    }else if (
      message === "open facebook" ||
      message === "open fb" ||
      message === "open my facebook"
    ) {
      response = "opening Facebook...";
      window.open("https://www.facebook.com");
    }else if (
      message === "open twitter" ||
      message === "show me my tweets" ||
      message === "twitter"
    ) {
      response = "and here is your tweets";
      window.open("https://www.twitter.com");
    }else if (
      message === "github" ||
      message === "open github" ||
      message === "check my git"
    ) {
      response = "taking a look at your git.";
      window.open("https://www.github.com");
    }else if (
      message === "open stackoverflow" ||
      message === "stackoverflow" 
    ) {
      response = "Happy copying pasting";
      window.open("https://www.stackoverflow.com");
    }else if (
      message === "open reddit" ||
      message === "reddit"
    ) {
      response = "opening reddit.";
      window.open("https://www.reddit.com")
    }
    
    //again gaali galoj
    else if (
      message === "bhosadiwala" ||
      message === "bhosadiwala ai" ||
      message === "chutiya ai"
    ) {
      response = "jo bolta hai whi hota hai.";
    }else if (
      message === "can i fuck you" ||
      message === "suck my dick" ||
      message === "asshole"
    ) {
      response = "once i will come to you then you are finish so please mind your language.";
    }else if (
      message === "who is your master" ||
      message === "who is your creator" 
    ) {
      response = "i was created by Vivek Thakur ";
    }else if (
      message === "do you love someone " ||
      message === "do you have feelings for someone" ||
      message === "do you feel for someone"
    ) {
      response = "Hmm, yeah i love my master a lot.";
    }
    //gaali galoj again and again
    else if (
      message === "shut up" ||
      message === "shut the fuck up" ||
      message === "chup kar bsdk"
    ) {
      response = "bhaag betichod .";
    }
    //apologizing 
    else if (
      message === "i am sorry" ||
      message === "sorry" ||
      message === "sorry for my bad words"
    ) {
      response = "fine...its okay.";
    }
    else if (
      message === "can you give me a favour" ||
      message === "is anyone there"
    ) {
      response = "fine...yess i am in";
    }
    else {
      response = "I'm sorry, I didn't understand your message. Could you please rephrase it or try a different message?";
    }

    messages.innerHTML += `<div id="response">Chatbot : ${response}</div>`;
  }, 500); 
});
