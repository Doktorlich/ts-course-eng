import express, { type Request, type Response, type NextFunction } from "express";
import routesTodo from "./routes/todo.js";

const app = express();

app.use(express.json());

app.use(routesTodo);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: "An error occured e" });
});

app.listen(3000);
