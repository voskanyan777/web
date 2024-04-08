from fastapi import FastAPI
import uvicorn
from backend.src.db.orm import SyncOrm

app = FastAPI(
    title='API for online store'
)


@app.on_event('startup')
async def startup():
    sync = SyncOrm()
    sync.create_tables()


if __name__ == '__main__':
    uvicorn.run(app, port=8005)
