from .database import async_engine, async_session_factory
from .models import Base


class AsyncOrm:
    @staticmethod
    async def create_tables():
        async with async_engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)

    @staticmethod
    async def drop_tables():
        async with async_engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)