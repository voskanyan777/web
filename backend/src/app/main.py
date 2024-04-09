import uvicorn
from fastapi import FastAPI

from backend.src.db.orm import AsyncOrm

app = FastAPI(
    title='API for online store'
)


@app.on_event('startup')
async def startup():
    async_orm = AsyncOrm
    await async_orm.drop_tables()
    await async_orm.create_tables()


if __name__ == '__main__':
    uvicorn.run(app, port=8002)
