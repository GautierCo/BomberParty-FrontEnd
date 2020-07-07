
const app = {

    playerPseudo: null,

    eventToAction: () => {
        
        const startGame = document.querySelector('.startGame');
        startGame.addEventListener('click', timerGame.startTimer);

        const showMenu = document.querySelector('.title-right');
        showMenu.addEventListener('click', utils.showMenu);
    },

    init : () => {
        
        app.eventToAction();
        chat.chatInit();
        mainGame.gameInit();
        utils.showModal();
        console.log('App started');

        /* Juste pour un test */
        chat.socket.on('newPlayer', (playerInfos) => {
          
            player.createPlayerInDOM(playerInfos);
        });
    },
};

document.addEventListener('DOMContentLoaded', app.init);