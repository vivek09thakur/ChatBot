class ChatBot {
  constructor() {
    this.chatLog = document.getElementById("chat-log");
    this.chatInput = document.getElementById("chat-input");
    this.sendButton = document.getElementById("send");
    this.apiUrl = "https://api-ml-bot.vercel.app/predict"

    this.sendButton.addEventListener("click", () => this.handleUserInput());
    this.chatInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.handleUserInput();
      }

    });

    this.typingDelay = 5;
  }

  async simulateTyping(message) {
    const botMessage = this.createMessage('', 'bot');
    this.chatLog.appendChild(botMessage);

    for (let i = 0; i < message.length; i++) {
      botMessage.textContent += message[i];
      await this.wait(this.typingDelay);
    }

    this.scrollToBottom();
  }

  async handleUserInput() {
    const userMessage = this.chatInput.value;
    if (userMessage === '') return;
    this.appendUserMessage(userMessage);
    this.hideBanners();
    const response = this.generateResponse(userMessage);
    await this.simulateTyping(response);
    this.chatInput.value = '';
  }

  async wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  appendBotMessage(message) {
    const botMessage = this.createMessage(message, "bot");
    this.chatLog.appendChild(botMessage);
    this.scrollToBottom();
  }

  appendUserMessage(message) {
    const userMessage = this.createMessage(message, "user");
    this.chatLog.appendChild(userMessage);
    this.scrollToBottom();
  }

  createMessage(message, messageClass) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", messageClass);
    messageElement.textContent = message;
    return messageElement;
  }


  async fetch_response(userMessage) {
    const response = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({message: userMessage }),
    });
    const data = await response.json();
    return data;
  }

  async generateResponse(userMessage) {
    const data = await this.fetch_response(userMessage);
    return data.response;
  }

  scrollToBottom() {
    this.chatLog.scrollTop = this.chatLog.scrollHeight;
  }

  hideBanners() {
    const banners = document.querySelectorAll(".banner");
    banners.forEach((banner) => {
      banner.style.display = "none";
    });
  }

}

document.addEventListener("DOMContentLoaded", function () {
  const chatbot = new ChatBot();
});