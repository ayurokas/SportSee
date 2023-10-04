const axios = require('axios');
const exec = require('child_process').exec;

axios.get('http://localhost:3000/user/12')
    .then(response => {
        console.log('Réponse reçue du back-end avec le code de statut:', response.status);
        if (response.status === 100) {
            console.log('Démarrage du front-end sur le port 3001.');
            exec(/^win/.test(process.platform) ? 'set PORT=3001 && react-scripts start' : 'PORT=3001 react-scripts start');
        } 
    })
    .catch(error => {
        console.log('Erreur lors de la vérification du back-end:', error.message);
        console.log('Exécution de la commande pour démarrer sur le port 3000.');

        console.log('Démarrage du front-end sur le port 3000.');
        exec('react-scripts start');
    });
