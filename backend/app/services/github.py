import httpx

class GitHubUserNotFoundError(Exception):
    pass


def get_github_user(username: str) -> dict:
    response = httpx.get(f"https://api.github.com/users/{username}")
    if response.status_code == 404:
        raise GitHubUserNotFoundError("Utilisateur GitHub introuvable")
    return response.json()