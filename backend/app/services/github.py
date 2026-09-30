import httpx


def get_github_user(username: str) -> dict:
    response = httpx.get(f"https://api.github.com/users/{username}")
    return response.json()