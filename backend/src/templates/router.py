from pathlib import Path

from fastapi import APIRouter
from fastapi import Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

router = APIRouter(
    prefix='/html_rendering',
    tags=['html_rendering'],
)

BASE_DIR = Path(__file__).parent
print(BASE_DIR)

templates = Jinja2Templates(directory=str(BASE_DIR))


@router.get("/product_description/{product_name}", response_class=HTMLResponse)
async def read_item(request: Request, product_name: str) -> dict:
    # return templates.TemplateResponse(
    #     request=request, name="description.html"
    # )
    return templates.TemplateResponse("description.html", {"request": request})
