from fastapi import FastAPI
from app.routers import users
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="DevWrapped API")

app.include_router(users.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],   # SEULEMENT ton front, pas "*"
    allow_methods=["GET"],                      # ton front ne fait que des GET
)

@app.get("/health")
def  health() -> dict:
    return {"status": "online"}