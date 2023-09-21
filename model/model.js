import responses from "./intents";

class ChatBot{
    constructor(){
        this.chatLog = document.getElementById("chat-log");
        this.chatInput = document.getElementById("chat-input");
        this.sendButton = document.getElementById("send");

        this.sendButton.addEventListener("click", this.sendMessage.bind(this));
        this.responses = responses;
        
    };
    handleUserInput(){
        const userMessage = this.chatInput.value;
        if (userMessage === "") return;
        this.appendUserMessage(userMessage);
        const response = this.generateResponse(userMessage);
        this.appendBotMessage(response);
        this.chatInput.value = "";
    }

    appendBotMessage(message){
        const botMessage = this.createMessage(message, "bot");
        this.chatLog.appendChild(botMessage);
        this.scrollToBottom();
    }

    appendUserMessage(message){
        const userMessage = this.createMessage(message, "user");
        this.chatLog.appendChild(userMessage);
        this.scrollToBottom();
    }

    createMessageElement(message, messageClass) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', messageClass);
        messageElement.textContent = message;
        return messageElement;
    }

    generateResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();

        for (const pattern in this.responses) {
            const regex = new RegExp(pattern, 'i');
            if (regex.test(lowerCaseMessage)) {
                const responseArray = this.responses[pattern];
                return responseArray[Math.floor(Math.random() * responseArray.length)];
            }
        }

        return this.responses["default"][Math.floor(Math.random() * this.responses["default"].length)];
    }
    scrollToBottom() {
        this.chatLog.scrollTop = this.chatLog.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const chatbot = new ChatBot();
});