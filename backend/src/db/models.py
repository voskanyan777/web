import asyncio
from typing import Annotated
from datetime import datetime
from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column
from database import Base, async_session_marker

intpk = Annotated[int, mapped_column(primary_key=True)]


class Users(Base):
    __tablename__ = 'users'
    id: Mapped[intpk]
    user_name: Mapped[str] = mapped_column(String(30), nullable=False)
    user_login: Mapped[str] = mapped_column(String(35), nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    user_email: Mapped[str] = mapped_column(String(50), nullable=False)
    registered_at: Mapped[datetime]

