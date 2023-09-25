# ExpressJS

Ce repo contient une appli express.js de type "hello world" pour tester le deploiement.

## Install en local

```bash
git clone https://github.com/sebastien-76/expressjs.git
cd expressjs
npm install
```

### Utilisation
```
node app.js
```

[http://localhost:3000](http://localhost:3000)

## Installation sur render

Prérequis : un compte Github.

- (optionnel) Forker un repository ou en créer un nouveau sur Github si nécessaire
- Créer un compte sur render.com [https://render.com](https://render.com)
- Créer un nouveau web service en cliquant sur l'option « + »
- Choisir l'option « Build and deploy from a Git repository »
- Cliquer sur « connect account » dans la section Github à droite
    Vous vous retrouver sur le site de github
- Taper votre mot de passe github
- Sélectionner le repository que vous voulez déployer
- Confirmer les permissions accordées
    Vous revenez sur le site de render
- Cliquer sur le bouton « connect » du repository que vous voulez publier
- Remplir les champs avec les données suivantes :
```
  General:

  Name: [sous-domaine de votre appli]
  Region: Frankfurt (EU Central)
  Instance Type: Free

  Build & Deploy:

  Repository: https://github.com/jibundeyare/src-express
  Branch: main
  Root Directory: <nc>
  Build Filters: <nc>
  Build Command: npm install
  Start Command: node app.js
```
Remplacer [sous-domaine de votre appli] par le sous-domaine souhaité.
Exemple : `foo`donnera `https://foo.onrender.com`

- Valider la configuration puis visiter le lien quand le build est terminé.

### Mise à jour sur render.com

- Mettre à jour le code en local
- Commiter le code avec `git add` et `git commit`
- Pousser le code sur Github avec `git push`
- Vérifier que le code est à jour sur render.com