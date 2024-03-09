
document.querySelector("#app").innerHTML = `
<div class="chat-header navbar navbar-expand-lg bg-body-tertiary">
      <h1 class="navbar-brand">ML Chatbot</h1>
    </div>

    <div class="chat-container mb-3">

      <div class="chat-log" id="chat-log">

        <!-- cards for intro -->

        <div id="banner1" class="banner card">
          <div class="card-body">
            <h5 class="card-title">Capabilities ⚡</h5>
            <p class="card-text">
              As I was just designed to respond to my feeded questions and answers pairs but I am able to do more than that. I can also respond to your greetings and can also tell you about my developer. Hope you will enjoy talking to me.
            </p>
          </div>
        </div>

        <div id="banner2" class="banner card">
          <div class="card-body">
            <h5 class="card-title">Limitations ⚠️</h5>
            <p class="card-text">
              As I am a web-based chatbot I have some limitations.I cannot respond to your questions which are not feeded to me and I can only respond to your questions which are feeded to me by my developer.
            </p>
            <a href="https://vercel.com/vivek09thakur/chatbot" class="btn btn-primary">View Deployment</a>
          </div>
        </div>

        <div id="banner3" class="banner card">
          <div class="card-body">
            <h5 class="card-title">Future Scopes 🔮</h5>
            <p class="card-text">
              If my questions and answers pairs will be replaced with a university's questions and answers pairs then I can be used as a chatbot for that university's website. Or similarly I can be used as a chatbot for any website.
            </p>
            <p class="card-text">To use me as a chatbot for your website you can contact my developer or fork my repository and can use me as a chatbot for your website.</p>
            <a href="https://github.com/vivek09thakur/ChatBot" class="btn btn-primary">View Github Repository</a>
          </div>
        </div>

        <div class="chat-message bot-message"></div>
      </div>

      <div class="chat-input input-group mb-3">
        <input
          type="text"
          id="chat-input"
          class="form-control"
          placeholder="Type your message"
        />
        <button id="send" class="btn btn-primary">
          <span class="material-symbols-outlined"> send </span>
        </button>
      </div>
    </div>
`