
const chat = {

    chatForm: document.querySelector('.chatbox-form'),
    chatMessages: document.querySelector('.chatbox-messages'),

    createMsgInChatBox : (message) => {

        const chatbox = document.querySelector('.chatbox-messages');
        const newMsg = document.querySelector('#newMsg');
        const clone = document.importNode(newMsg.content, true);
        clone.querySelector('.chatbox-pseudo').textContent = message.username + ": ";
        clone.querySelector('.chatbox-pseudo').style.color = message.color;
        clone.querySelector('#chatbox-text').textContent = message.text;
        chatbox.append(clone);

        chat.chatMessages.scrollTop = chat.chatMessages.scrollHeight;
    },

    eventChatToAction: () => {
        chat.chatForm.addEventListener('submit', websocket.msgToServer);
    },

    chatInit: () => {
        
        chat.eventChatToAction();
        console.log("Chat init");
    },
};