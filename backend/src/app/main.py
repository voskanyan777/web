import uvicorn
from fastapi import FastAPI, Depends

from backend.src.auth.database import User
from backend.src.auth.database import create_db_and_tables
from backend.src.auth.schemas import UserRead, UserCreate
from backend.src.auth.users import auth_backend, current_user, fastapi_users
from backend.src.db.orm import AsyncOrm
from backend.src.templates.router import router as render_router

app = FastAPI(
    title='API for online store'
)
app.include_router(
    fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"]
)
app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(render_router)

@app.get("/authenticated-route")
async def authenticated_route(user: User = Depends(current_user)):
    return {"message": f"Hello {user.email}!"}


@app.on_event('startup')
async def startup():
    async_orm = AsyncOrm()
    await create_db_and_tables()
    await async_orm.drop_tables()
    await async_orm.create_tables()


if __name__ == '__main__':
    uvicorn.run(app, port=8002)
