import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
sys.path.append(str(BASE_DIR))

from db.pydantic_models import GoodsSchema
from sqlalchemy import insert
from db.database import async_engine, async_session_factory
from db.models import Base, Goods


class AsyncOrm:
    @staticmethod
    async def create_tables():
        async with async_engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)

    @staticmethod
    async def drop_tables():
        async with async_engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)

    @staticmethod
    async def add_goods(goods: GoodsSchema) -> None:
        product = Goods(
            goods_name=goods.goods_name,
            goods_description=goods.goods_description,
            goods_price=goods.goods_price,
            goods_image_url=goods.goods_image_url,
            goods_type=goods.goods_type,
            count=goods.count,
            goods_status=goods.goods_status,
        )
        async with async_session_factory() as session:
            session.add_all([product])
            await session.commit()
