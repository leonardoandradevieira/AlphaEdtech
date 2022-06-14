let sendButton = document.getElementById("send-button");
let input = document.getElementById("input-text");
let deleteButton = document.getElementById("delete-button");

input.addEventListener('keypress', enter);
sendButton.addEventListener('click', sendText);
deleteButton.addEventListener('click', deleteText);

function enter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendButton.click();
    };
};

function sendText() {
    let newText = document.getElementById("input-text").value;
    let textArea = document.querySelector("textarea");

    textArea.value += '\n' + '\n' + newText;
    scroll();
};

function scroll() {
    const textArea = document.querySelector("textarea");
    
    textArea.scrollTop = textArea.scrollHeight;
}

function deleteText() {
    let textArea = document.querySelector("textarea");

    textArea.value = "Envie uma mensagem:";
}