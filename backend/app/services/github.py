import httpx


def get_github_user(username: str) -> dict:
    r = httpx.get(f"https://api.github.com/users/{username}")
    return r.json()