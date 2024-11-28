# LeoMarchand

## Présentation Technique du projet
Ce projet inclut un système de scraping pour récupérer et afficher des données en temps réel à partir d'une source web. Il est conçu pour fonctionner avec un back-end Node.js et un front-end Vue.js.

## Configuration des clés API

1. Créez un fichier `.env` à la racine du projet (copiez `.env.example` comme modèle).
2. Ajoutez vos clés API dans ce fichier. Par exemple :

   ```env
   // env.js
   export const config = {
     VUE_APP_YOUTUBE_API_KEY: 'VotreCléAPI',
   }
   ```

## Démarrage du projet

1. Démarrage du back-end :
Accédez au dossier /api et démarrez le serveur Node.js avec la commande suivante :

   ```bash
   nodemon server.js
   ```

2. Démarrage du front-end :
Dans le répertoire principal, utilisez la commande suivante :

    ```bash
    npm run dev
    ```

3. Assurez-vous que le back-end est opérationnel :
Le front-end récupère les données depuis le back-end. Si le back-end n'est pas démarré, certaines fonctionnalités ne fonctionneront pas.

## Points importants pour l'équipe

Ordre de démarrage : Toujours démarrer le back-end avant le front-end.
Fichier `.env` : Chaque membre doit avoir un fichier `.env` correctement configuré. Sans cela, certaines fonctionnalités pourraient échouer.
Installation des dépendances : Après avoir cloné le projet, exécutez :

   ```bash
   npm install
   ```

## Contributions
Merci de toujours créer une nouvelle branche pour vos modifications et de la fusionner via une pull request. Utilisez des noms de branche explicites, comme `scraping` ou `fix/api-endpoint`.
