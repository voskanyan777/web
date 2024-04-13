from fastapi_users.authentication import BearerTransport, JWTStrategy

from backend.src.db.database import async_session_factory


async def get_async_session():
    async with async_session_factory() as session:
        yield session


bearer_transport = BearerTransport(tokenUrl='auth/login')

SECRET = 'some'

def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(secret=SECRET, lifetime_seconds=3600)