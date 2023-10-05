const axios = require('axios');
const exec = require('child_process').exec;

/**
 * Cette fonction effectue une requête GET pour récupérer les informations d'un utilisateur
 * à partir d'une API locale sur le port 3000. Si la requête est réussie avec un code de statut 100,
 * elle démarre le front-end sur le port 3001. En cas d'erreur, elle démarre le front-end sur le port 3000.
 */
axios.get('http://localhost:3000/user/12')
    .then(response => {
        console.log('Réponse reçue du back-end avec le code de statut:', response.status);
        
        if (response.status === 200) {
            console.log('Démarrage du front-end sur le port 3001.');
            // Détecte le système d'exploitation et exécute la commande appropriée pour définir le port et démarrer le front-end
            exec(/^win/.test(process.platform) ? 'set PORT=3001 && react-scripts start' : 'PORT=3001 react-scripts start');
        } 
    })
    .catch(error => {
        console.log('Erreur lors de la vérification du back-end:', error.message);
        console.log('Exécution de la commande pour démarrer sur le port 3000.');

        console.log('Démarrage du front-end sur le port 3000.');
        // Exécute la commande pour démarrer le front-end sur le port 3000 par défaut
        exec('react-scripts start');
    });
