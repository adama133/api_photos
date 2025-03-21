# API Photos

## 📌 Description
API Photos est une API permettant d'afficher les derniere images venant de l'API unsplash. Elle est construite avec Node.js et Express, et est conteneurisée avec Docker.

## 🚀 Installation et Exécution

### 1️⃣ Cloner le dépôt
```bash
git clone https://github.com/adama133/api_photos.git
cd api_photos
```

### 2️⃣ Construire l'image Docker
```bash
docker build -t api_photos .
```

### 3️⃣ Lancer le conteneur
```bash
docker run -p 3000:3000 -it api_photos
```
L'API sera disponible à l'adresse : [http://localhost:3000](http://localhost:3000)

## 🛠 Développement sans Docker

### Installation des dépendances
```bash
npm install
```

### Démarrer l'API en local
```bash
npm start
```

## 📄 Fichiers Docker

- **Dockerfile** : Définit l’image Docker pour l’API
- **.dockerignore** : Ignore les fichiers inutiles dans l’image

## 📂 Structure du projet
```
api_photos/
│── src/              # Code source de l’API
│── node_modules/     # Dépendances (ignoré dans Git)
│── package.json      # Définition du projet Node.js
│── Dockerfile        # Fichier de configuration Docker
│── .gitignore        # Fichiers ignorés par Git
│── .dockerignore     # Fichiers ignorés par Docker
```

## 🔗 Liens utiles
- [Docker Documentation](https://docs.docker.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

