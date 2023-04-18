// Charge les variables d'environnement du fichier .env (par défaut)
// Attention, le .env doit être à la racine du dossier (sinon surprise !)
// Attention, en haut du fichier (sinon surprise !)
require("dotenv").config();

// Import des dépendances externes
const express = require("express");

// Import des dépendances internes
const router = require("./src/router");

// Création de l'app express
const app = express();

// Brancher le routeur
app.use(router);

// Lancement de l'app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

