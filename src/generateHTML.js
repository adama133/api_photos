// Fonction pour générer le HTML avec les photos
const generateHTML = (latestPhotos) => {
    // generer le code de la galerie
    let photoHTML = latestPhotos.map(photo => `
        <div class="photo">
            <img src="${photo.urls.small}" alt="${photo.alt_description || 'No description'}">
            <p>${photo.alt_description || 'No description'}</p>
            <p>Photo by <a href="${photo.user.links.html}" target="_blank">${photo.user.name}</a></p>
        </div>
    `).join('');

    
    // retourner la page html complete
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Page d'accueil</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                .photo {
                    margin: 10px;
                    display: inline-block;
                }
                .photo img {
                    max-width: 200px;
                    border-radius: 8px;
                }
            </style>
        </head>
        <body>
            <h1>Page d'accueil</h1>
            <div id="photo-gallery">
                ${photoHTML}
            </div>
        </body>
        </html>
    `;
};


module.exports = {generateHTML};