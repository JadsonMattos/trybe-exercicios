from flask import Request
from fastapi import FastAPI, Depends

app = FastAPI()


def my_dependency(query_string: str = None):
    ...
    return  query_string


@app.get("/")
async def my_route(dependency: str = Depends(my_dependency)):
    return {"message": dependency}


@app.middleware("http")
async def my_custom_middleware(request: Request, call_next):
    ...
    response = await call_next(request)
    ...
    return response
