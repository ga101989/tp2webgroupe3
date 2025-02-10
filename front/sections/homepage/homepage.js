document.addEventListener("DOMContentLoaded", function () {
    //recupérer tous les boutons
    const scoreButtons = document.querySelectorAll(".score-button");

    // recupérer la croix de fermeture
    const closeButtons = document.querySelectorAll(".close-score");

    scoreButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const scoreDiv = document.querySelector(`#score1`);

            if (scoreDiv) {
                if (scoreDiv.style.display === "none" || scoreDiv.style.display === "") {
                    scoreDiv.style.display = "flex";
                } else {
                    scoreDiv.style.display = "none";
                }
            }
        });
    });

    closeButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const scoreDiv = document.querySelector(`#score1`);

            if (scoreDiv) {
                if (scoreDiv.style.display === "flex") {
                    scoreDiv.style.display = "none";
                } else {
                    scoreDiv.style.display = "flex";
                }
            }
        });
    });

    
});
