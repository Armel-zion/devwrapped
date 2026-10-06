from fastapi import APIRouter, HTTPException
from app.services.github import get_github_user , GitHubUserNotFoundError , GitHubUnavailableError
from app.schemas.user import GitHubUserResponse

router = APIRouter()

@router.get("/users/{username}", response_model=GitHubUserResponse)
def get_user(username: str) -> dict:
    try:
        user = get_github_user(username)

    except GitHubUserNotFoundError:
        raise HTTPException(status_code=404, detail="utilisateur introuvable")
    except GitHubUnavailableError:
        raise HTTPException(status_code=502, detail="GitHub est indisponible, réessaie plus tard")
    
    return {
            "login": user["login"],
            "name" : user["name"],
            "public_repos"  : user["public_repos"],
            "followers" : user["followers"],
            "created_at" : user["created_at"],
           }