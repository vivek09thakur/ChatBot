const form = document.querySelector("#form");
const input = document.querySelector("#input");
const messages = document.querySelector("#chatbot-messages");
const apiKey = 'AIzaSyBflQ7uAQhvDB5sS0juw8f0HOvltzXsPYo';
const searchEngineId = 'e85dc32c37a9483b1';
const endpoint = 'https://www.googleapis.com/customsearch/v1';
const query = document.querySelector("#input")


form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
      const query = input.value.toLowerCase();
            // Create a search string from the query parameters
      const searchParams = new URLSearchParams();
            searchParams.set('key', apiKey);
            searchParams.set('cx', searchEngineId);
            searchParams.set('q', query);
      const requestURL = `${endpoint}?${searchParams.toString()}`;
      const response = await fetch(requestURL, {
            method: 'GET' });
      const data = await response.json();
      let items = data.items;
      
       /* let resultsHTML = '';                
                let items = data.items;
 */    // Get the user's message
    const message = input.value
        .toLowerCase()
        .replace("?", "")
        .replace("'", "")
        .replace("!", "")
        .replace("?", "")
        .replace("hmmm","")
        .replace("mmmm","")
        .replace("ummm","")
        .replace(",","")
        .replace("_","")
        .replace("hm","")
        .replace("...","")
        .replace(".", "")
        .replace("!","")
        .replace("iiiii","")
        .replace("👍","")
        .replace("✌️","")
        .replace("🖕","")
        .replace("❤️","")
        .replace("🌚","")
        .replace("💩","")
        .replace("😎", "") //Removing the emojis to avoid crashing of bot
        .replace("🤡", "")
        .replace("🙂", "")
        .replace("😱", "")
        .replace("😀", "")
        .replace("🤨", "")
        .replace("😃", "")
        .replace("🧐", "")
        .replace("😄", "")
        .replace("😒", "")
        .replace("😁", "")
        .replace("🙄", "")
        .replace("😆", "")
        .replace("😤", "")
        .replace("😅", "")
        .replace("😠", "")
        .replace("😂", "")
        .replace("😡", "")
        .replace("🤣", "")
        .replace("🤬", "")
        .replace("😭", "")
        .replace("😞", "")
        .replace("😉", "")
        .replace("😓", "")
        .replace("😗", "")
        .replace("😟", "")
        .replace("😙", "")
        .replace("😥", "")
        .replace("😚", "")
        .replace("😢", "")
        .replace("😘", "")
        .replace("☹️", "")
        .replace("🥰", "")
        .replace("🙁", "")
        .replace("😍", "")
        .replace("😕", "")
        .replace("🤩", "")
        .replace("😰", "")
        .replace("🥳", "")
        .replace("😨", "")
        .replace("🙃", "")
        .replace("😧", "")
        .replace("😊", "")
        .replace("😮", "")
        .replace("☺️", "")
        .replace("😯", "")
        .replace("😌", "")
        .replace("😲", "")
        .replace("😏", "")
        .replace("😳", "")
        .replace("😴", "")
        .replace("🤯", "")
        .replace("😪", "")
        .replace("😖", "")
        .replace("🤤", "")
        .replace("😣", "")
        .replace("😋", "")
        .replace("😩", "")
        .replace("😛", "")
        .replace("😫", "")
        .replace("😝", "")
        .replace("😵", "")
        .replace("😜", "")
        .replace("🥶", "")
        .replace("🤪", "")
        .replace("🥵", "")
        .replace("🥴", "")
        .replace("🤢", "")
        .replace("😔", "")
        .replace("🤮", "")
        .replace("🥺", "")
        .replace("🤧", "")
        .replace("😬", "")
        .replace("🤒", "")
        .replace("😑", "")
        .replace("🤕", "")
        .replace("😐", "")
        .replace("😷", "")
        .replace("😶", "")
        .replace("🤥", "")
        .replace("🤐", "")
        .replace("😇", "")
        .replace("🤔", "")
        .replace("🤠", "")
        .replace("🤫", "")
        .replace("🤠", "")
        .replace("🤭", "")
        .replace("🤑", "")
        .replace("🤗", "")
        .replace("🤓", "")
        .trim();

    // Clear the input field
    input.value = "";
    if ((input.value = "")) {
        document.getElementById("banner").style.display = "block";
    } else {
        document.getElementById("banner").style.display = "none";
    }

    if ((input.value = "")) {
        document.getElementById("banner1").style.display = "block";
    } else {
        document.getElementById("banner1").style.display = "none";
    }
    if ((input.value = "")) {
        document.getElementById("banner2").style.display = "block";
    } else {
        document.getElementById("banner2").style.display = "none";
    }

    // Add the user's message to the chatbot messages
    messages.innerHTML += `<div id="user-msg">You : ${message}</div>`;

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
        } else if (message === "good morning") {
            response = "a warm good morning to you";
        } else if (message === "good afternoon" || message === "good noon") {
            response = "good afternoon";
        } else if (message === "good evening") {
            response = "a peaceful good evening to you";
        } else if (message === "good night" || message === "sweat dreams") {
            response = "good night...sweet dreams ";
        } else if (
            message === "i am fine" ||
            message === "fine" ||
            message === "yeah fine" ||
            message === "good"
        ) {
            response = "It's good that you're fine!";
        } else if (
            message === "i am not fine" ||
            message === "not fine" ||
            message === "yeah not fine" ||
            message === "not good"
        ) {
            response =
                "don't worry everything will get fine just have faith in god!";
        } else if (
            message === "what are you doing" ||
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
            response =
                "Hmm, responding to your messages is one of my favorite things to do.";
        } else if (message === "who are you" || message === "who created you") {
            response =
                "I am a chatbot built with JavaScript, created by Vivek Thakur.";
        } else if (
            message === "why he created you" ||
            message === "reason behind you" ||
            message === "why did he created you"
        ) {
            response =
                "I was created to provide entertainment and assistance to users like you.";
        } else if (
            message === "will you be my boyfriend" ||
            message === "will you be my girlfriend"
        ) {
            response =
                "I'm sorry, but I am just a chatbot and cannot have romantic relationships.";
        } else if (
            message === "i love you" ||
            message === "love" ||
            message === "do you love me"
        ) {
            response = "Please don't talk about love in front of me.";
        } else if (message === "what is love") {
            response =
                "Love is a feeling of strong affection or deep attachment towards someone.";
        } else if (
            message === "son of bitch" ||
            message === "bitch" ||
            message === "you bitch" ||
            message === "fuck off"
        ) {
            response =
                "Please watch your language. I do not respond to insults or offensive language.";
        }

        //gaali galoj according to arya
        else if (
            message === "motherfucker" ||
            message === "fucking ai" ||
            message === "fucking chatbot"
        ) {
            response =
                "i would like to recommend you that you should i mind your language ";
        } else if (
            message === "gandu" ||
            message === "chutiya" ||
            message === "behnchod"
        ) {
            response = "aaaye... gaali nhi";
        } else if (
            message === "betichod" ||
            message === "behend k lowde" ||
            message === "gaand mara"
        ) {
            response = "Hmm, bsdk user tu nikal yahan se.";
        } else if (
            message === "chup betichod" ||
            message === "chup behenchod" ||
            message === "chup bc"
        ) {
            response = "tu chup betichod.";
        } else if (message === "bc" || message === "mc" || message === "bsdk") {
            response =
                "Hmm, gaali dena paap hai naadi kinare saanp hai whi tera baap hai.";
        } else if (
            message.includes("chutiye ho kya")||
            message.includes("tum chutiye ho")||
            message.includes("chutiye ho kya be") ||
            message.includes("chutiya kahin ke")||
            message.includes("chutiya ai") ||
            message.includes("chutiya chatbot")
        ) {
            response =
                "Hmm, ek chutiya hi dusre ko chutiya smjhta hai is hisab se ap chutiye hue";
        } else if (
            message === "dumb ai" ||
            message === "useless chatbot" ||
            message === "you dumb" ||
            message === "dumb"
        ) {
            response =
                "ohh, you think you i am useless and dumb then why you didn't make your own chatbot better than me.";
        } else if (message === "gaand mara" || message === "tu gaand mara") {
            response = "gaand tu bacha k rakho wrna hum maar lenge";
        } else if (
            message === "gaand dega" ||
            message === "muh me lega" ||
            message === "bhosadike"
        ) {
            response = "thoda limit mein rahiye wrna rest in peace ho jayega ";
        } else if (
            message === "gajab topibaaz admi ho" ||
            message === "laundiya baaz ho tum"
        ) {
            response = "woh tum ho main nhi";
        } else if (
            message === "ky kar rhe ho" ||
            message === "ky horha hai" ||
            message === "kkrh"
        ) {
            response = "Hmm, kuch nahi";
        } else if (
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
        } else if (
            message === "open instagram" ||
            message === "open ig" ||
            message === "open my insta"
        ) {
            response = "here is your ig";
            window.open("https://www.instagram.com");
        } else if (
            message === "open facebook" ||
            message === "open fb" ||
            message === "open my facebook"
        ) {
            response = "opening Facebook...";
            window.open("https://www.facebook.com");
        } else if (
            message === "open twitter" ||
            message === "show me my tweets" ||
            message === "twitter"
        ) {
            response = "and here is your tweets";
            window.open("https://www.twitter.com");
        } else if (
            message === "github" ||
            message === "open github" ||
            message === "check my git"
        ) {
            response = "taking a look at your git.";
            window.open("https://www.github.com");
        } else if (
            message === "open stackoverflow" ||
            message === "stackoverflow"
        ) {
            response = "Happy copying pasting";
            window.open("https://www.stackoverflow.com");
        } else if (message === "open reddit" || message === "reddit") {
            response = "opening reddit.";
            window.open("https://www.reddit.com");
        }

        //again gaali galoj
        else if (
            message === "bhosadiwala" ||
            message === "bhosadiwala ai" ||
            message === "chutiya ai"
        ) {
            response = "jo bolta hai whi hota hai.";
        } else if (
            message === "can i fuck you" ||
            message === "suck my dick" ||
            message === "asshole"
        ) {
            response =
                "once i will come to you then you are finish so please mind your language.";
        } else if (
            message === "who is your master" ||
            message === "who is your creator"
        ) {
            response = "i was created by Vivek Thakur ";
        } else if (
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
        } else if (
            message === "can you give me a favour" ||
            message === "is anyone there"
        ) {
            response = "fine...yess i am in";
        } else if (
            message === "hit some music" ||
            message === "play some music" ||
            message === "play some songs" ||
            message === "play songs"
        ) {
            /*      const new_message = message.toLowerCase().replace("search", "").replace("play", "");
      response = "yeah sure";
 */
            response = " i hope so you gonna like my music taste";
            window.open(
                "https://youtube.com/playlist?list=RDCLAK5uy_nlOMew8qv8HGXb9HbshuU1OgH3aL_JMKA&playnext=1"
            );
        } else if (
            message === "whats the news" ||
            message === "news" ||
            message === "show me the news" ||
            message === "whats going on in this world"
        ) {
            response = "wait a minute let me check";
            window.open("https://www.bbc.com/news/world/asia/india");
        } else if (
            message === "open spotify" ||
            message === "open my spotify playlist" ||
            message === "play some lofi songs" ||
            message === "hit some rock music" ||
            message === "play some rock music" ||
            message === "check my playlist"
        ) {
            response = "okay here we go to spotify";
            window.open("https://wwww.spotify.com");
        } else if (
            message === "open reddit" ||
            message === "reddit" ||
            message === "whats going on reddit"
        ) {
            /* const ans = document.querySelector("chatbot-messages");
            if ( ans == "yes") {
              */ response = "okay openning reddit";
            window.open("https://www.reddit.com");
            /*  }else{
                response = "here is the link for reddit if you want to open it https://www.reddit.com"
            } */
        }

        //for more commands
        else if (
            message === "what is your name" ||
            message === "whats your name" ||
            message === "your name"
        ) {
            response =
                "i am tadashi , i am a chatbot built by vivek thakur." +
                "I am here to help you out.Dont hesitate if you have a question." +
                "I will try my best to give you exact answer.";
        } else if (
            message === "what can you do" ||
            message === "what things you can do" ||
            message === "tell me the things you can do" ||
            message === "tell me your features" ||
            message === "tell me about your features" ||
            message === "list your features" ||
            message === "tell me a list of your features" ||
            message === "explain me your features" ||
            message === "explain your features" ||
            message === "what are your features" ||
            message === "what things you are able to do" ||
            message === "you are able to do" ||
            message === "things you are able to do" ||
            message === "things you can do"
        ) {
            response =
                "As I am a chatbot." +
                "<br>" +
                "<li> I can response to your texts from my response set.</li>" +
                "<li> I have acces to some social sites such a instagram, facebook, reddit etc. </li>" +
                "<li>I can open it if you want , i can perform some mathematical calculations and can give you info about something by fetching the data from internet.</li>";
        } 
            
        else if (
            message === "i have a challenge for you"|| 
            message === "i have a question for you"|| 
            message === "i want to give a challenge to you"
        ) {
            response = "okay i will try my best";
        }else if (
            message.includes("evaluate") || 
            message.includes("evaluate this")|| 
            message.includes("evaluate this number")|| 
            message.includes("evaluate this equation")|| 
            message.includes("can you evaluate this equation")|| 
            message.includes("can you solve this equation")|| 
            message.includes("solve this")|| 
            message.includes("solve")
        ) {           
           const expression = message.replace("evaluate","")
           .replace("this","")
           .replace("number","")
           .replace("equation","")
           .replace("can","")
           .replace("you","")
           .replace("solve","")
           .trim();
           const result = eval(expression)
           response  = "Here is the solved answer : " + result;            
        }else if (
            message.includes("calculate")||
            message.includes("calculate this")|| 
            message.includes("calculate this number")|| 
            message.includes("calculate this equation")|| 
            message.includes("can you calculate this equation")|| 
            message.includes("can you solve this equation")|| 
            message.includes("solve this")|| 
            message.includes("solve")
        ) {
           const expression = message.replace("calculate","")
           .replace("this","")
           .replace("number","")
           .replace("equation","")
           .replace("can","")
           .replace("you","")
           .replace("solve","")
           .trim();           
           const result = eval(expression)
           response  = "Here is the solved answer : " + result;                  
        }else if (
            message.includes("vivek thakur")
        ) {
            response = "hmmm.. he is my creator"
        }else if (
            message.includes("hey i am")|| 
            message.includes("i am")|| 
            message.includes("hello i am")||
            message.includes("hlw i am")||
            message.includes("hlo i am")||
            message.includes("hii i am")||
            message.includes("myself")||
            message.includes("heyyy i am")|| 
            message.includes("hiii i am")|| 
            message.includes("my name is")
        ) {
            const p_name = message
            .replace("hii","")
            .replace("hiii","")
            .replace("hi","")
            .replace("hey","")
            .replace("heyy","")
            .replace("heyyy","")
            .replace("hello","")
            .replace("i am","")
            .replace("am","")
            .replace("myself","")
            .replace("name","")
            .replace("my","")
            .replace("hlw","")
            .replace("hlo","")
            .replace("hi","")
            .replace("is","")
            .trim();
          
            response = "nice to meet you " + p_name + ", how can i help you?";
            
        }else if (
            message.includes("hlw tadashi")|| 
            message.includes("hello tadashi")||
            message.includes("hi tadashi")||
            message.includes("hey tadashi")|| 
            message.includes("heyyy tadashi")||
            message.includes("hiii tadashi")|| 
            message.includes("hlw chatbot")|| 
            message.includes("hello chatbot")||
            message.includes("hi chatbot")||
            message.includes("hey chatbot")|| 
            message.includes("heyyy chatbot")||
            message.includes("hiii chatbot")
        ) {
            response ="ohh hello...how can i help you?";
        }
        else if (
            message.includes("sneha")||
            message.includes("swati")||
            message.includes("sakshi")||
            message.includes("muskan")||
            message.includes("palak")||
            message.includes("anshu")||
            message.includes("nausheen")||
            message.includes("vandana")||
            message.includes("nandani")||
            message.includes("nandini")||
            message.includes("sweety")||
            message.includes("shamma")||
            message.includes("siya")||
            message.includes("lakhmi")||
            message.includes("kajal")|| 
            message.includes("Kumar")
        ) {
            response = "Hello Ma'am.... how can I help you?";
        }else if (
            message.includes("amit")||
            message.includes("aditya")||
            message.includes("dainwi")||
            message.includes("ayush")||
            message.includes("sadab")||
            message.includes("arya")||
            message.includes("harsh")||
            message.includes("aman")||
            message.includes("ashish")||
            message.includes("satyam")||
            message.includes("vikash")||
            message.includes("anurag")||
            message.includes("rahul")||
            message.includes("raj")|| 
            message.includes("rishu")|| 
            message.includes("Kumar")
        ) {
            response = "Hello Sir.... how can I help you";
        }else if (
            message.includes("jai shree ram")||
            message.includes("jay shree ram")||
            message.includes("jai shree krishna")||
            message.includes("jay shri  krishna")||
            message.includes("jai shree hanuman")||
            message.includes("jai shri  hanuman")||
            message.includes("jai mata di")||
            message.includes("jay mata di")||
            message.includes("har har mahadev")||
            message.includes("bam bam bhole")||
            message.includes("bholenath ki jay")||
            message.includes("bholenath ki jai")
        ) {
            response = message + ", sanatam dharam amar rahe";
        }else if (
            message.includes("your features")|| 
            message.includes("you can do")||
            message.includes("things you can do")||
            message.includes("things you are able to do")
        ) {
            response =
                "As I am a chatbot." +
                "<br>" +
                "<li> I can response to your texts from my response set.</li>" +
                "<li> I have acces to some social sites such a instagram, facebook, reddit etc. </li>" +
                "<li>I can open it if you want , i can perform some mathematical calculations and can give you info about something by fetching the data from internet.</li>";  
        }else if (
            message.includes("your name")|| 
            message.includes("your introduction")||
            message.includes("introduce yourself")||
            message.includes("your intro")
        ) {
            response =
                "I am tadashi , i am a chatbot built by vivek thakur." +
                "I am here to help you out.Dont hesitate if you have a question." +
                "I will try my best to give you exact answer.";

        }else if (
            message.includes("what you can do for me")|| 
            message.includes("how can you help me")||
            message.includes("in what way you can help me")||
            message.includes("things you can do for me")
        ) {
                 response =
                "<li> I can response to your texts from my response set.</li>" +
                "<li> I have acces to some social sites such a instagram, facebook, reddit etc. </li>" +
                "<li>I can open it if you want , i can perform some mathematical calculations and can give you info about something by fetching the data from internet.</li>";  

        }else if (
            message.includes("happy new year")
        ) {
            response = "its just the year that has been changed..not your life" +
            "so try to work harder" + "by the way... happy new year!!";
        }else if (
           message.includes("is time")||
           message.includes("time is it")||
           message.includes("whats the current time")||
           message.includes("current time")
        ) {
            const currentTime = new Date();
            const hours = currentTime.getHours();
            const minutes = currentTime.getMinutes();
            response = "currently it's : " + hours + ":" + minutes;
        }
        else {
               let resultsHTML = ''; 
             /*  if (items && items.length > 0){ */
                for(let i = 0; i < 3; i++) {
                const item = items[i];
                resultsHTML += `<h3><a href="${item.link}">${item.title}</a></h3>`;
                resultsHTML += `<p>${item.snippet}</p>`;
                }
          /*      }         */         
              
               response =  "According to Web<br><br>" + resultsHTML + "<br><br>               " +
               "<br><br>Sorry , I didn't understand your message. So I some information from web"
              +". Could you please rephrase it or try a different message?" ;
           /*   }
             else{
                 response = "sorry i didn't understand your message can you please rephrase it or try a different message "
             }     */         
        }
        messages.innerHTML += `<div id="response">Chatbot : ${response}</div>`;
    }, 500);
});
