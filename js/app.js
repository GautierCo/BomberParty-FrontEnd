
const app = {

    eventToAction: () => {
        
        const startGame = document.querySelector('.startGame');
        startGame.addEventListener('click', timerGame.startTimer);

        const showMenu = document.querySelector('.title-right');
        showMenu.addEventListener('click', utils.showMenu);
    },

    init : () => {
        
        app.eventToAction();
        chat.chatInit();
        websocket.websocketInit();
        utils.showModal();

        console.log('App started');       
    },
};

document.addEventListener('DOMContentLoaded', app.init);