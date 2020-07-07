
const timerGame = {

    timerValue: 5,
    
    startTimer: () => {

        let timerElem = document.querySelector('.timer-time');

        const timer = setInterval( () => {

            if (!timerGame.timerValue == 0) {

                timerGame.timerValue--;
            } else {

                timerGame.timerValue = 45;
                clearInterval(timer);
            }

            timerElem.textContent = timerGame.timerValue;

        }, 1000);
    },

    stopTimer: () => {

    },
};