# ADR 0001 — Départager les langages à égalité par l'utilisation la plus récente

- Statut : accepté
- Date : 2026-10-12

## Contexte

La route GET /users/{username}/stats renvoie le top 3 des langages d'un développeur,
classés par nombre de dépôts. Quand deux langages ont le même nombre de dépôts,
il faut une règle pour décider lequel passe devant.

## Options envisagées

1. Garder l'ordre d'arrivée (Counter.most_common) : simple, mais le résultat dépend
   de l'ordre dans lequel GitHub envoie les dépôts. C'est du hasard.
2. Ordre alphabétique : stable, mais sans aucun sens pour un développeur
   (Go passerait devant Python juste parce que G vient avant P).
3. Le langage utilisé le plus récemment (date du dernier push) passe devant :
   reflète ce que le développeur code en ce moment.

## Décision

Option 3. À égalité de dépôts, le langage dont un dépôt a été poussé le plus
récemment passe devant. C'est la seule règle qui dit quelque chose de vrai
sur le développeur.

## Conséquences

- calculer_stats construit un deuxième dictionnaire, dernier_push
  (langage → date du dernier push).
- Le tri utilise une clé à deux critères : (nombre de dépôts, dernier push).
- Le classement peut changer d'un jour à l'autre si le développeur pousse
  du code dans un autre langage. C'est voulu.