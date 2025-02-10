document.addEventListener("DOMContentLoaded", () => {
    const connexionDiv = document.querySelector(".connexion-text");
    const inscriptionDiv = document.querySelector(".inscription-text");
    const switchToInscription = connexionDiv.querySelector("a");
    const switchToConnexion = inscriptionDiv.querySelector("a");

    const inscriptionForm = inscriptionDiv.querySelector("form");
    const connexionForm = connexionDiv.querySelector("form");

    // BASCULE ENTRE CONNEXION ET INSCRIPTION
    switchToInscription.addEventListener("click", () => {
        connexionDiv.style.display = "none";
        inscriptionDiv.style.display = "flex";
    });

    switchToConnexion.addEventListener("click", () => {
        inscriptionDiv.style.display = "none";
        connexionDiv.style.display = "flex";
    });

    // CHARGER LE DERNIER EMAIL UTILISÉ
    const savedEmail = localStorage.getItem("lastUsedEmail");
    if (savedEmail) {
        connexionDiv.querySelector("#email").value = savedEmail;
    }


    //regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



    // ENREGISTRER UN NOUVEL UTILISATEUR
    inscriptionForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = inscriptionForm.querySelector("#username").value;
        const email = inscriptionForm.querySelector("#email").value;
        const password = inscriptionForm.querySelector("#password").value;
        const confirmPassword = inscriptionForm.querySelector("#confirmpassword").value;

        if (!emailRegex.test(email)) {
            alert("Veuillez entrer un email valide !");
            return;
        }

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial !");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Vérifier si l'utilisateur existe déjà
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert("Cet email est déjà utilisé !");
            return;
        }

        const newUser = { email,username, password };
        users.push(newUser);

        // Stocker les utilisateurs dans le localStorage
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("lastUsedEmail", email);

        alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        inscriptionForm.reset();
        switchToConnexion.click(); // Basculer vers connexion
    });

    // VÉRIFIER LES IDENTIFIANTS LORS DE LA CONNEXION
    connexionForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = connexionForm.querySelector("#email").value;
        const password = connexionForm.querySelector("#password").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Rechercher l'utilisateur
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert(`Bienvenue, ${user.username} !`);
            localStorage.setItem("lastUsedEmail", email); // Sauvegarde l'email pour la prochaine connexion
            window.location.href = "index.html"; // Redirection après connexion
        } else {
            alert("Email ou mot de passe incorrect.");
        }
    });
});
