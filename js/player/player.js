
const player = {

    playerMin: 1,
    // playerMax: parseInt(document.querySelectorAll('.player').length + 1, 10),
    playerMax: 5,
    playerIdSelect: 4,
    playerInfos: null,
    totalPlayer: 0,

    generateRandomPlayer: () => {

        return Math.floor(Math.random() * (player.playerMax - player.playerMin) + player.playerMin);
    },

    rotateBomb: (rotate) => {

        move(".bomb-img")
        .rotate(rotate)
        .end();
    },

    switchPlayer: () => {

        let randomPlayer =  player.generateRandomPlayer();

        console.log(randomPlayer)

        if (randomPlayer == player.playerIdSelect) {

            while(randomPlayer == player.playerIdSelect) {
                randomPlayer =  player.generateRandomPlayer();
                console.log(randomPlayer);
            }
        }

        player.playerIdSelect = randomPlayer;

        let playerSelected = document.querySelector(`#p${randomPlayer}`);
        let playerId = parseInt(playerSelected.getAttribute('player-id'), 10);

        if (playerId == 1) {
            player.rotateBomb(90);
        } else if (playerId == 2) {
            player.rotateBomb(180);
        } else if (playerId == 3)  {
            player.rotateBomb(270);
        } else if (playerId == 4) {
            player.rotateBomb(0);
        } else {
            console.log("erreur switchplayer")
        }

        player.changeColor(playerSelected);
    },

    changeColor: (playerSelected) => {

        const allPlayerActive = document.querySelectorAll('.player-select');

        allPlayerActive.forEach(player => {
            player.classList.remove('player-select');
        });

        playerSelected.parentElement.children[0].classList.add('player-select');
    },

    createPlayerInDOM: (playerInfos) => {
        
        const containerGame = document.querySelector('.container-game');
        const newPlayer = document.querySelector('#newPlayer');
        const clone = document.importNode(newPlayer.content, true);

        clone.querySelector('.form-group').id = `player${playerInfos.playerId}`;
        clone.querySelector('.pseudo').textContent = playerInfos.username;
        clone.querySelector('.pseudo').for = `p${playerInfos.playerId}`;
        clone.querySelector('.player').id = `p${playerInfos.playerId}`;
        clone.querySelector('.player').setAttribute("player-id", playerInfos.playerId);

        containerGame.append(clone);

        player.totalPlayer = player.totalPlayer + 1;

        console.log("totalPlayer : " + player.totalPlayer);

        const switchPlayer = document.querySelector('.changePlayer');
        switchPlayer.addEventListener('click', player.switchPlayer);
    },
};