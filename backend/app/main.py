from fastapi import FastAPI

app = FastAPI(title="DevWrapped API")


@app.get("/health")
def  health() -> dict:
    return {"status": "online"}