import express, { Express, Request, Response } from "express";


const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.json("helloworld");
})

app.listen(8000, () => {
    console.log("Server is running at http://localhost:8000");
})
