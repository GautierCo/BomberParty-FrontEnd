
const player = {

    switchPlayer: (randomPlayer, randomPlayerId) => {

        let rotate = randomPlayer * 90;

        gsap.to(".bomb-img", {rotation: rotate, duration: 0.5});

        const playerSelect = document.querySelector(`[playerid='${randomPlayerId}']`);

        player.changeColor(playerSelect);
    },

    changeColor: (playerSelected) => {

        const allPlayerActive = document.querySelectorAll('.player-select');

        allPlayerActive.forEach(player => {

            player.classList.remove('player-select');
        });

        playerSelected.children[0].classList.add('player-select');
    },

    createPlayerInDOM: (playerInfos) => {
        
        const containerGame = document.querySelector('.container-game');
        const newPlayer = document.querySelector('#newPlayer');
        const clone = document.importNode(newPlayer.content, true);

        clone.querySelector('.form-group').setAttribute("playerid", playerInfos.playerId);
        clone.querySelector('.pseudo').textContent = playerInfos.username;
        clone.querySelector('.pseudo').for = `${playerInfos.playerId}`;
        clone.querySelector('.player').id = `${playerInfos.playerId}`;
        clone.querySelector('.player').setAttribute("player-id", playerInfos.playerId);

        containerGame.append(clone);

        const switchPlayer = document.querySelector('.changePlayer');
        switchPlayer.addEventListener('click', websocket.switchPlayerEvent);
    },

    deleteOnPlayerInDOM: (playerId) => {

        const selectPlayerInDom = document.querySelector(`[playerid='${playerId}']`);
        selectPlayerInDom.remove();
    },

    deletePlayersInDOM: () => {

        const getAllPlayer = document.querySelectorAll('.player');
        const container = document.querySelector('.container-game');

        if ( getAllPlayer ) {

            getAllPlayer.forEach(playerInDOM => {

                container.removeChild(playerInDOM);
                playerInDOM.remove();
            });
        }
    },
};