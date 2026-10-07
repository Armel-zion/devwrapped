from fastapi import APIRouter, HTTPException
from app.services.github import get_github_user , GitHubUserNotFoundError , GitHubUnavailableError
from app.schemas.user import GitHubUserResponse

router = APIRouter()

@router.get("/users/{username}", response_model=GitHubUserResponse)
def get_user(username: str) -> GitHubUserResponse:
    try:
        user = get_github_user(username)

    except GitHubUserNotFoundError:
        raise HTTPException(status_code=404, detail="utilisateur introuvable")
    except GitHubUnavailableError:
        raise HTTPException(status_code=502, detail="GitHub est indisponible, réessaie plus tard")
    
    return user