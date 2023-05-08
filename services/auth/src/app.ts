import express, { Express } from 'express';

const app: Express = express();

app.get("/noman", (req, res) => {
    res.json({
        messageOnly:"super kubernetes day"
    })
})

export default app;