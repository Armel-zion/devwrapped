# DevWrapped

> La carte d'identité d'un développeur, générée depuis son GitHub : ce qu'il code, avec quoi, depuis quand. À partager sur LinkedIn.

## Pourquoi DevWrapped ?

Un recruteur n'a pas le temps de fouiller le GitHub d'un candidat dépôt par dépôt. DevWrapped lit le profil public d'un développeur et le résume en une carte visuelle, une « carte d'identité » du développeur, à partager sur LinkedIn ou dans un portfolio.

La carte répond en un coup d'œil aux questions qu'on se pose sur un développeur :

| Question | Réponse de DevWrapped | État (v0.1) |
|:--|:--|:--|
| Il code en quoi ? | le top 3 de ses langages | ✅ API prête |
| Il a combien de projets ? | le nombre de ses dépôts (sans les forks) | ✅ API prête |
| Son travail intéresse-t-il les autres ? | le total des étoiles reçues | ✅ API prête |
| Depuis quand est-il sur GitHub ? | l'ancienneté du compte (« depuis 3 ans ») | 🟡 donnée prête, affichage côté React |
| Peut-on voir tout ça en un coup d'œil ? | la carte à partager | ⬜ interface React en cours |

DevWrapped n'utilise que les **données publiques** de GitHub : il ne montre que ce que le développeur a lui-même choisi de rendre public.

## État du projet

Version **v0.1 en cours** : l'API FastAPI est prête (profil et statistiques). L'interface React + TypeScript, qui affichera la carte, est la prochaine étape.

Projet personnel d'apprentissage réalisé pendant mon Bachelor 2 Informatique à Ynov Campus.

## Fonctionnalités

- `GET /health` : vérifie que l'API est en ligne.
- `GET /users/{username}` : renvoie les informations principales d'un profil GitHub (login, nom, nombre de dépôts publics, followers, date de création du compte). La réponse est validée et filtrée par un schéma Pydantic : seuls ces 5 champs sont renvoyés, et un compte sans nom renvoie `"name": null`.
- `GET /users/{username}/stats` : renvoie les statistiques d'un développeur calculées à partir de ses dépôts publics (100 au maximum) : nombre de dépôts (sans les forks), top 3 des langages et total des étoiles. À égalité de dépôts, le langage utilisé le plus récemment passe devant (voir [ADR 0001](docs/adr/0001-classement-des-langages.md)).
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
    │   ├── schemas/
    │   │   ├── user.py        # Contrat de réponse du profil (GitHubUserResponse)
    │   │   └── stats.py       # Contrat de réponse des statistiques (GitHubStatsResponse)
    │   └── services/
    │       ├── github.py      # Appels à l'API GitHub (profil, dépôts), exceptions
    │       └── stats.py       # Calcul des statistiques, sans accès au réseau
    └── requirements.txt       # Dépendances Python
docs/
└── adr/                       # Décisions d'architecture (ADR)
```

## Feuille de route

### v0.1 — en cours
- [x] API FastAPI avec endpoint de santé `/health`
- [x] Récupération d'un profil via l'API publique GitHub
- [x] Architecture en couches (routers / services)
- [x] Gestion des erreurs (404 utilisateur introuvable, 502 GitHub indisponible)
- [x] Schémas de réponse validés avec Pydantic
- [x] Statistiques : langages principaux et étoiles (l'ancienneté sera calculée côté React, voir [ADR 0002](docs/adr/0002-anciennete-cote-react.md))
- [ ] Interface React + TypeScript : saisie du pseudo et affichage de la carte

### Versions suivantes
- [ ] Tests automatisés (pytest)
- [ ] Connexion avec GitHub (OAuth) et authentification JWT
- [ ] Base de données PostgreSQL
- [ ] Export de la carte en image
- [ ] Conteneurisation Docker
- [ ] Intégration et déploiement continus (GitHub Actions)
- [ ] Mise en ligne
