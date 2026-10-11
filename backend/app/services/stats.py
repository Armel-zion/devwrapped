from collections import Counter

def calculer_stats(depots: list[dict]) -> dict:
    mes_depots = [depot for depot in depots if not depot["fork"]]

    langages = [depot["language"] for depot in mes_depots if depot["language"] is not None]
    compteur = Counter(langages)

    dernier_push = {}
    for depot in mes_depots:
        langage = depot["language"]
        if langage is None:
            continue
        if langage not in dernier_push or depot["pushed_at"] > dernier_push[langage]:
            dernier_push[langage] = depot["pushed_at"]

    podium = sorted(compteur, key=lambda langage: (compteur[langage], dernier_push[langage]), reverse=True)

    return {
        "repos_count": len(mes_depots),
        "top_languages": podium[:3],
        "total_stars": sum(depot["stargazers_count"] for depot in mes_depots),
    }
