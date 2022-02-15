import "express-async-errors";
import  Express, { NextFunction, Request, Response} from "express";
import { router } from "./routes";

const app = Express();

app.use(Express.json());

app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({
        status: "Error",
        message: error.message
    })
})

app.listen(3000, () => console.log(" Server is running PORT 3000"))