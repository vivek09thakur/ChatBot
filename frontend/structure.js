document.querySelector("#app").innerHTML = `
<div class="chat-header navbar navbar-expand-lg bg-body-tertiary">
      <h1 class="navbar-brand">/ CHATBOT</h1>
    </div>

    <div class="chat-container mb-3">

      <div class="chat-log" id="chat-log">

        <!-- cards for intro -->
        <div class="banner-holder">
        <div class="banner card">
            <div class="card-body">
              <h5 class="card-title">Introduction</h5>
              <p class="card-text">
                A simple chatbot made using cosine similarity and trained on a dataset of 200 conversations. It can answer questions related to its training dataset.
              </p>
            </div>
          </div>

          <div class="banner card">
            <div class="card-body">
              <h5 class="card-title">Capabilities ⚡</h5>
              <p class="card-text">
                This bot uses cosine similarity to find out best possible response from its training dataset for user's prompt. It can answer questions related to its training dataset.
              </p>
            </div>
          </div>

          <div class="banner card">
            <div class="card-body">
              <h5 class="card-title">Limitations ⚠️</h5>
              <p class="card-text">
                This bot can only answer questions related to its training dataset. It can't answer questions which are out of its training dataset. 
              </p>
            </div>
          </div>

          <div class="banner card">
            <div class="card-body">
              <h5 class="card-title">Use Cases</h5>
              <p class="card-text">
                This bot can be used as a chatbot for your website of your company or for your personal website. It can be used as a chatbot for customer support. To know more .. <b><a href="https://github.com/vivek09thakur/ChatBot">View Github Repository</a></b>
              </p>
            </div>
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
`;
