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


@router.get("/test", response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse(
        request=request, name="base.html"
    )
