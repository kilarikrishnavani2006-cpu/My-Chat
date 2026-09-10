const responses = {

    "hello": "Hello! 👋 Welcome to My Chat.",

    "hi": "Hi! How can I help you?",

    "what is html": "HTML stands for HyperText Markup Language. It is used to create the structure of web pages.",

    "what is css": "CSS stands for Cascading Style Sheets. It is used to design and style web pages.",

    "what is javascript": "JavaScript is a programming language used to make web pages interactive.",

    "who are you": "I am My Chat, your personal chatbot 🤖.",

    "bye": "Goodbye! Have a nice day! 👋"
};


function sendMessage() {

    const input = document.getElementById("user-input");

    const question = input.value.trim().toLowerCase();

    if (question === "") {
        return;
    }

    addMessage(question, "user");

    input.value = "";

    setTimeout(function() {

        let answer;

        if (responses[question]) {
            answer = responses[question];
        } else {
            answer = "Sorry, I don't know the answer to that question yet.";
        }

        addMessage(answer, "bot");

    }, 500);
}


function addMessage(message, sender) {

    const chatBox = document.getElementById("chat-box");

    const messageDiv = document.createElement("div");

    messageDiv.innerText = message;

    if (sender === "user") {
        messageDiv.className = "user-message";
    } else {
        messageDiv.className = "bot-message";
    }

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}
