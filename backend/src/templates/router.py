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
    description = ("Представьте себе удивительные кроссовки, "
                   "которые словно олицетворяют ритм вашей жизни. "
                   "Изготовленные из инновационных материалов, "
                   "они объединяют в себе комфорт и стиль.")
    return templates.TemplateResponse("description.html", {
        "request": request,
        "product_name": product_name,
        "price": "1200$",
        "description": description
    })
