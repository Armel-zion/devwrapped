from fastapi import APIRouter
from app.services.github import get_github_user

router = APIRouter()

@router.get("/users/{username}")
def get_user(username: str) -> dict:
    user = get_github_user(username)
    return {
            "login": user["login"],
            "name" : user["name"],
            "public_repos"  : user["public_repos"],
            "followers" : user["followers"],
            "created_at" : user["created_at"]
           }