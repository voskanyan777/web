from pathlib import Path

from fastapi import APIRouter
from fastapi import Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from db.orm import AsyncOrm
router = APIRouter(
    prefix='/html_rendering',
    tags=['html_rendering'],
)

BASE_DIR = Path(__file__).parent.parent

templates = Jinja2Templates(directory=str(BASE_DIR / 'templates'))
async_orm = AsyncOrm()


@router.get("/product_description/{product_name}", response_class=HTMLResponse)
async def read_item(request: Request, product_name: str) -> dict:
    description = await async_orm.select_goods(product_name)
    return templates.TemplateResponse("description.html", {
        "request": request,
        "product_name": description['goods_name'],
        'product_description': description['goods_description'],
        'price': description['goods_price'],
        'goods_image_url': description['goods_image_url'],
        'goods_type': description['goods_type'],
        'count': description['count'],
        'goods_status': description['goods_status'],
    })

