from pydantic import BaseModel
from datetime import datetime

class  GitHubUserResponse(BaseModel):
    login: str
    name : str | None
    public_repos  : int
    followers : int
    created_at : datetime
    

