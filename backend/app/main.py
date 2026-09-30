from fastapi import FastAPI
from app.routers import users

app = FastAPI(title="DevWrapped API")

app.include_router(users.router)

@app.get("/health")
def  health() -> dict:
    return {"status": "online"}