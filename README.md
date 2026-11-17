# Module Angular TP5

Projet Angular poursuivi depuis les TP3 et TP4. Ce TP ajoute les services partagés, la gestion des activités et la préparation du déploiement GitHub Pages.

## Démarrer le projet

```bash
npm ci
npm start
```

L'application démarre sur `http://localhost:4200/`.

## Fonctionnalités du TP4

- Navigation Angular entre l'accueil, la page About et la route `index.html`.
- Lien About2 utilisant `href` pour comparer une navigation avec rechargement.
- Animation d'entrée lors de l'ajout d'un objectif.
- Navigation automatique vers About une seconde après l'ajout d'un objectif.
- Page `consultAct` avec zéro, un ou deux paramètres d'URL.
- Service singleton pour partager les activités entre Accueil, About et le détail.
- Consultation, modification et suppression d'une activité.

## Déploiement GitHub Pages

Le dépôt est `fatma-gmr/ModuleAngularTP`. Le déploiement est configuré pour utiliser `/ModuleAngularTP/` comme base URL. Après publication, le site sera accessible à `https://fatma-gmr.github.io/ModuleAngularTP/`.

Commande prévue : `ng deploy --base-href=/ModuleAngularTP/` (publication sur la branche `gh-pages`).

Exemples : `/consultAct`, `/consultAct/bonjour` et `/consultAct/caMarche/deuxParam`.
