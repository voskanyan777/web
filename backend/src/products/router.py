from fastapi import APIRouter
from db.pydantic_models import GoodsSchema
from db.orm import AsyncOrm

router = APIRouter(
    prefix='/products',
    tags=['products'],
)

async_orm = AsyncOrm()

@router.post('/add_product')
async def add_product(product: GoodsSchema):
    await async_orm.add_goods(product)
    return {
        'data': None,
        'status': 'ok'
    }

@router.get('/get_product')
async def get_product(goods_name: str):
    data = await async_orm.select_goods(goods_name)
    return {
        'data': data,
        'status': 'ok'
    }