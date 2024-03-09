class ChatBot {
  constructor() {
    this.chatLog = document.getElementById("chat-log");
    this.chatInput = document.getElementById("chat-input");
    this.sendButton = document.getElementById("send");
    this.apiUrl = "https://api-ml-chatbot.vercel.app/predict";
    this.failure_messages = [
      "I'm sorry, I couldn't understand what you said could you please rephrase that?",
      "I didn't get that, could you please try again with different prompt or rephrase it for me?",
      "I didn't understand that, could you please try again? Maybe its not in my vocabulary yet.",
      "I didn't get that, could you please try again with different prompt or rephrase it for me?",
      "I think I'm not understanding you, could you please try again? Maybe its not in my training data yet.",
      "Sorry I didn't get that, could you please try again with different prompt or rephrase it for me?",
      "Oops! I didn't understand that, could you please try again? Maybe its not in my vocabulary yet.",
      "I am sorry, I didn't understand that, could you please try again with different prompt or rephrase it for me?",
    ];

    this.sendButton.addEventListener("click", () => this.handleUserInput());
    this.chatInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.handleUserInput();
      }
    });

    this.typingDelay = 5;
  }

  async simulateTyping(message) {
    const botMessage = this.createMessage("", "bot");
    this.chatLog.appendChild(botMessage);

    for (let i = 0; i < message.length; i++) {
      botMessage.textContent += message[i];
      await this.wait(this.typingDelay);
    }

    this.scrollToBottom();
  }

  async handleUserInput() {
    const userMessage = this.chatInput.value;
    if (userMessage === "") return;
    this.appendUserMessage(userMessage);
    this.hideBanners();
    this.appendBotMessage("Thinking...");
    const response = await this.generateResponse(userMessage);
    // remove the thinking message
    this.chatLog.removeChild(this.chatLog.lastChild);
    await this.simulateTyping(response);
    this.chatInput.value = "";
  }

  async wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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

  async generateResponse(userMessage) {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from API");
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error fetching response:", error.message);
      return this.failure_messages[
        Math.floor(Math.random() * this.failure_messages.length)
      ];
    }
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
