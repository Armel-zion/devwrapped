import httpx

class GitHubUserNotFoundError(Exception):
    pass

class GitHubUnavailableError(Exception):
    pass

def get_github_user(username: str) -> dict:
    response = httpx.get(f"https://api.github.com/users/{username}")
    if response.status_code == 404:
        raise GitHubUserNotFoundError("Utilisateur GitHub introuvable")
    if response.status_code == 502:
        raise GitHubUnavailableError("GitHub est indisponible, réessaie plus tard")
    return response.json()