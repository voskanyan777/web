from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import sessionmaker
import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
sys.path.append(str(BASE_DIR))

from db.config import settings


sync_engine = create_engine(settings.DATABASE_URL_asyncpg)

async_engine = create_async_engine(
    url=settings.DATABASE_URL_asyncpg,
    echo=True
)

session_factory = sessionmaker(sync_engine)
async_session_factory = async_sessionmaker(async_engine)

