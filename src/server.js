const {generateHTML} = require("./generateHTML")// importer la fonction de generation du code html
const express = require('express');
const axios = require('axios');


const app = express();
const PORT = 3000;// le port du serveur

// nombre de photos a recuperer
let nb_photos = 10;

// pour stocker les dernieres photos
let latestPhotos = [];


// Fonction pour récupérer les photos d'Unsplash
const fetchPhotos = async () => {
    try {
        // requête pour recuperer les photos
        const response = await axios.get("https://api.unsplash.com/photos", {
            params: {
                per_page: nb_photos,
                order_by: 'latest'
            },
            headers: {
                Authorization: "Client-ID NLIC3rSsi_ft9bMltwqS86l9jr8Vsa_MuqCII2YyJDY" // clé API
            }
        });

        latestPhotos = response.data;// recuperer les images
    } catch (error) {
        console.error('Erreur lors de la récupération des photos:', error);
    }
};

// Récupérer les photos au démarrage
fetchPhotos();
// Récupérer les dernieres photos toutes les 10 secondes
setInterval(fetchPhotos, 10000);



// Route principale qui génère et renvoie le HTML
app.get('/', (req, res) => {
    res.send(generateHTML(latestPhotos));
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});