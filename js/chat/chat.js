
const chat = {

    chatForm: document.querySelector('.chatbox-form'),
    chatMessages: document.querySelector('.chatbox-messages'),
    socket: io('http://localhost:8080'),

    joinRoom: (pseudoPlayer, colorPlayer) => {

        chat.socket.emit('joinRoom', { username: pseudoPlayer, color: colorPlayer });

        player.playerInfos = { 
            username: pseudoPlayer, 
            color: colorPlayer,
        };
    },

    msgToClient: () => {

        chat.socket.on('message', message => {
        
            chat.createMsgInChatBox(message);

            chat.chatMessages.scrollTop = chat.chatMessages.scrollHeight;
        });
    },

    msgToServer: () => {

        chat.chatForm.addEventListener('submit', (e) => {

            e.preventDefault();

            const msg = e.target.elements.chatboxmsg.value;

            chat.socket.emit('chatMessage', msg);

            e.target.elements.chatboxmsg.value = '';
            e.target.elements.chatboxmsg.focus = '';
        });
    },

    createMsgInChatBox : (message) => {

        const chatbox = document.querySelector('.chatbox-messages');
        const newMsg = document.querySelector('#newMsg');
        const clone = document.importNode(newMsg.content, true);
        clone.querySelector('.chatbox-pseudo').textContent = message.username + ": ";
        clone.querySelector('.chatbox-pseudo').style.color = message.color;
        clone.querySelector('#chatbox-text').textContent = message.text;
        // clone.querySelector('.chatbox-time').textContent = message.time;
        chatbox.append(clone);
    },

    chatInit: () => {

        chat.msgToClient();
        chat.msgToServer();
        console.log('Chat init');
        
    },
};







