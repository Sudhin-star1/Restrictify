import express, { Express } from 'express';

const app: Express = express();

app.get("/", (req, res) => {
    res.json({
        status: "ok",
        message: "helloworld",
    })
})

export default app;