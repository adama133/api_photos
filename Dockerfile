FROM node:18-alpine

WORKDIR /app

# copier le fichier des dependances
COPY package*.json ./

# installer les dependences
RUN npm install --omit=dev
# copier le restes des fichiers
COPY . .

EXPOSE 3000

CMD ["node", "src/server.js"]