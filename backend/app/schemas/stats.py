from pydantic import BaseModel

class GitHubStatsResponse(BaseModel):
    repos_count:  int
    top_languages: list[str]
    total_stars : int