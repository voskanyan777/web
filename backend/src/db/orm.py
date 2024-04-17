import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
sys.path.append(str(BASE_DIR))


from db.database import async_engine
from db.models import Base


class AsyncOrm:
    @staticmethod
    async def create_tables():
        async with async_engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)

    @staticmethod
    async def drop_tables():
        async with async_engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
