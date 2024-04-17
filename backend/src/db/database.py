from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import sessionmaker

from .config import settings


sync_engine = create_engine(settings.DATABASE_URL_asyncpg)

async_engine = create_async_engine(
    url=settings.DATABASE_URL_asyncpg,
    echo=True
)

session_factory = sessionmaker(sync_engine)
async_session_factory = async_sessionmaker(async_engine)

