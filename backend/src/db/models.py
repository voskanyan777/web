from typing import Annotated
from typing import Annotated
from datetime import datetime
from sqlalchemy import String, ForeignKey, CheckConstraint
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


intpk = Annotated[int, mapped_column(primary_key=True)]
user_name = Annotated[str, mapped_column(String(30), nullable=False)]


# class Users(Base):
#     __tablename__ = 'user'
#     id: Mapped[intpk]
#     user_name: Mapped[user_name]
#     user_login: Mapped[str] = mapped_column(String(35), nullable=False)
#     password: Mapped[str] = mapped_column(nullable=False)
#     user_email: Mapped[str] = mapped_column(String(50), nullable=False)
#     registered_at: Mapped[datetime]


class Goods(Base):
    __tablename__ = 'goods'
    id: Mapped[intpk]
    goods_name: Mapped[str] = mapped_column(String(30), nullable=False)
    goods_description: Mapped[str] = mapped_column(String(500), nullable=False)
    goods_price: Mapped[float] = mapped_column(nullable=False)
    goods_image_url: Mapped[str] = mapped_column(String(500), nullable=False)
    goods_type: Mapped[str] = mapped_column(String(50), nullable=False)
    count: Mapped[int] = mapped_column(nullable=False)
    goods_status: Mapped[str] = mapped_column(String(50), nullable=False)


class GoodsReviews(Base):
    __tablename__ = 'goods_reviews'
    __table_args__ = (CheckConstraint('review_star IN (0, 1, 2, 3, 4, 5)'),)
    id: Mapped[intpk]
    goods_id: Mapped[int]
    user_name: Mapped[user_name]
    review: Mapped[str] = mapped_column(String(500))
    review_star: Mapped[int] = mapped_column(nullable=False)


class GoodsBasket(Base):
    __tablename__ = 'goods_basket'
    id: Mapped[intpk]
    user_id: Mapped[int]
    goods_id: Mapped[int]

