from pydantic import BaseModel
from datetime import datetime

class  GitHubUserResponse(BaseModel):
    login: str | None
    name : str
    public_repos  : int
    followers : int
    created_at : datetime
    

