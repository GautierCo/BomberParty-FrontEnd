
const utils = {
    
    showMenu: () => {
        var menu = document.getElementById("container-menu");
        if ( menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    },

    showModal: (e) => {

        /* Surement mieux, à remplacer plus tard. */
        const contentModal = `
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Informations du joueur</h5>
            </div>

            <div class="modal-body">
            <form id="form-player">
                <div class="form-group">
                    <input type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo">
                    <input type="text" name="color" id="color" value="cyan" placeholder="Votre couleur">
                </div>
                    <button type="submit" class="btn btn-primary" id="save-pseudo">Rejoindre la partie</button>
                </form>
            </div>`;

        const myModalInstance = new BSN.Modal("#modal", {
            content: contentModal,
            keyboard: false
        });

        myModalInstance.show();

        const formPlayer = document.querySelector('#form-player');
        formPlayer.addEventListener('submit', (e) => {

            e.preventDefault();
            const playerPseudo = document.querySelector('#pseudo').value;
            const playerColor = document.querySelector('#color').value;
            chat.joinRoom(playerPseudo, playerColor);
            myModalInstance.hide();
        });
    },
};