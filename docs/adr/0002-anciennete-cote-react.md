# ADR 0002 — Calculer l'ancienneté du compte côté React

- Statut : accepté
- Date : 2026-10-12

## Contexte

L'issue #6 demande d'afficher l'ancienneté du développeur (par exemple : « depuis 3 ans »).
La date de création du compte (created_at) se trouve dans le profil GitHub
(/users/{username}), pas dans la liste des dépôts utilisée par GET /users/{username}/stats.

## Options envisagées

1. A — Ajouter l'ancienneté à /stats : la route ferait une deuxième requête à l'API GitHub
   pour obtenir le profil. Problème : sans authentification, GitHub limite à 60 requêtes
   par heure. Avec 2 requêtes par carte, on ne pourrait générer que 30 cartes par heure.
2. B — Calculer l'ancienneté dans React : la page appelle déjà GET /users/{username},
   qui renvoie created_at. On peut donc utiliser cette date directement, sans nouvelle requête.

## Décision

Option B. L'ancienneté n'est pas calculée par /stats : React la calcule à partir de
created_at, déjà reçu. On évite une deuxième requête vers GitHub et chaque route
garde une seule responsabilité.

## Conséquences

- La route /stats renvoie seulement repos_count, top_languages et total_stars.
- React devra calculer « depuis X ans » à partir de created_at (en UTC).
- L'issue #6 est terminée sans l'ancienneté côté API.