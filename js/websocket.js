
const websocket = {

    socket: io('http://localhost:3000'),

    switchPlayerEvent: () => {

        websocket.socket.emit('switch_player');

        websocket.socket.on('switch_player', (rdmPlayer) => {

            player.switchPlayer(rdmPlayer.randomPlayer, rdmPlayer.randomPlayerId);
        });
    },

    refreshPlayers: () => {

        const getAllPlayer = document.querySelectorAll('.ppp');

        if ( getAllPlayer ) {
            
            websocket.socket.on('refreshPlayer', (allPlayers) => {

                player.deletePlayersInDOM();

                allPlayers.forEach(p => {

                    player.createPlayerInDOM(p);
                });
            });
        }
    },

    newPlayer: (pseudoPlayer, colorPlayer) => {

        websocket.socket.emit('newPlayer', { username: pseudoPlayer, color: colorPlayer });

        websocket.socket.on('newPlayer', (newPlayer) => {

            websocket.refreshPlayers();
        });
    },

    playerDisconnect: () => {
        websocket.socket.on('player_disconnect', (playerId) => {

            player.deleteOnPlayerInDOM(playerId);
        });
    },

    joinRoom: (pseudoPlayer, colorPlayer) => {

        websocket.socket.emit('joinRoom', { username: pseudoPlayer, color: colorPlayer });
    },

    msgToClient: () => {

        websocket.socket.on('message', message => {
        
            chat.createMsgInChatBox(message);
        });
    },

    msgToServer: (e) => {

        e.preventDefault();

        const msg = e.target.elements.chatboxmsg.value;

        websocket.socket.emit('chatMessage', msg);

        e.target.elements.chatboxmsg.value = '';
        e.target.elements.chatboxmsg.focus = '';
    },

    websocketInit: () => {

        websocket.socket;
        websocket.msgToClient();
        websocket.playerDisconnect();
        console.log('Websocket init');
    },
};