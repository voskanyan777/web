from fastapi import FastAPI
import uvicorn

app = FastAPI(
    title='API for online store'
)

if __name__ == '__main__':
    uvicorn.run(app, port=8005)