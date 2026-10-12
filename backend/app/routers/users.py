from fastapi import APIRouter, HTTPException
from app.services.github import get_github_user , GitHubUserNotFoundError , GitHubUnavailableError, get_github_repos
from app.schemas.user import GitHubUserResponse
from app.services.stats import calculer_stats
from app.schemas.stats import GitHubStatsResponse

router = APIRouter()

@router.get("/users/{username}", response_model=GitHubUserResponse)
def get_user(username: str) -> GitHubUserResponse:
    try:
        user = get_github_user(username)

    except GitHubUserNotFoundError:
        raise HTTPException(status_code=404, detail="Utilisateur introuvable")
    except GitHubUnavailableError:
        raise HTTPException(status_code=502, detail="GitHub est indisponible, réessaie plus tard")
    
    return user

@router.get("/users/{username}/stats", response_model=GitHubStatsResponse)
def get_user_stats(username: str) -> GitHubStatsResponse:
    try:
        depots =  get_github_repos(username)
    except GitHubUserNotFoundError:
        raise HTTPException(status_code=404, detail="Utilisateur introuvable")
    except GitHubUnavailableError:
        raise HTTPException(status_code=502, detail="GitHub est indisponible, réessaie plus tard")
    return calculer_stats(depots)