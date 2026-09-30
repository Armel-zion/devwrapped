from fastapi import FastAPI
from app.routers import stats 

app = FastAPI(title="DevWrapped API")

app.include_router(stats.router)

@app.get("/health")
def  health() -> dict:
    return {"status": "online"}