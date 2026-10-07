# DevWrapped

> Transforme un profil GitHub en carte de développeur stylée et partageable.

## Description

DevWrapped analyse l'activité publique d'un développeur sur GitHub et la résume sous forme de carte visuelle, une « carte d'identité » du développeur, à partager sur LinkedIn ou dans un portfolio.

Le projet est en cours de développement (v0.1). Pour l'instant, l'API récupère et nettoie les informations de base d'un profil GitHub. L'interface React et la carte sont les prochaines étapes.

Projet personnel d'apprentissage réalisé pendant mon Bachelor 2 Informatique à Ynov Campus.

## Fonctionnalités

- `GET /health` : vérifie que l'API est en ligne.
- `GET /users/{username}` : renvoie les informations principales d'un profil GitHub (login, nom, nombre de dépôts publics, followers, date de création du compte).
- Gestion des erreurs :
  - `404` si l'utilisateur GitHub n'existe pas ;
  - `502` si l'API GitHub ne répond pas correctement (limite de requêtes, panne).
- Documentation interactive générée automatiquement (Swagger) sur `/docs`.

## Stack technique

- **Backend** : Python 3.14, FastAPI, httpx
- **Frontend** (à venir) : React, TypeScript

## Prérequis

- Python 3.14 ou plus récent
- Git

## Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/Armel-zion/devwrapped.git
   ```
2. Se placer dans le dossier du backend :
   ```bash
   cd devwrapped/backend
   ```
3. Créer l'environnement virtuel :
   ```bash
   python -m venv .venv
   ```
4. Activer l'environnement virtuel :
   - Windows (PowerShell) : `.\.venv\Scripts\Activate.ps1`
   - macOS / Linux : `source .venv/bin/activate`
5. Installer les dépendances :
   ```bash
   pip install -r requirements.txt
   ```

## Lancement

Depuis le dossier `backend/`, avec l'environnement virtuel activé :

```bash
uvicorn app.main:app --reload
```

L'API est alors disponible sur :

- http://127.0.0.1:8000/health
- http://127.0.0.1:8000/docs (documentation interactive Swagger)


## Structure du projet

```
devwrapped/
└── backend/
    ├── app/
    │   ├── main.py            # Point d'entrée : crée l'app FastAPI et branche les routers
    │   ├── routers/
    │   │   └── users.py       # Routes HTTP /users/... (reçoit les requêtes, renvoie les réponses)
    │   └── services/
    │       └── github.py      # Logique métier : appels à l'API GitHub, exceptions
    └── requirements.txt       # Dépendances Python
```

## Feuille de route

### v0.1 — en cours
- [x] API FastAPI avec endpoint de santé `/health`
- [x] Récupération d'un profil via l'API publique GitHub
- [x] Architecture en couches (routers / services)
- [x] Gestion des erreurs (404 utilisateur introuvable, 502 GitHub indisponible)
- [x] Schémas de réponse validés avec Pydantic
- [ ] Statistiques : langages principaux, étoiles, ancienneté du compte
- [ ] Interface React + TypeScript : saisie du pseudo et affichage de la carte

### Versions suivantes
- [ ] Tests automatisés (pytest)
- [ ] Connexion avec GitHub (OAuth) et authentification JWT
- [ ] Base de données PostgreSQL
- [ ] Export de la carte en image
- [ ] Conteneurisation Docker
- [ ] Intégration et déploiement continus (GitHub Actions)
- [ ] Mise en ligne
