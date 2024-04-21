from pydantic import BaseModel


class GoodsSchema(BaseModel):
    goods_name: str
    goods_description: str
    goods_price: float
    goods_image_url: str
    goods_type: str
    count: int
    goods_status: str
