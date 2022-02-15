import { Request, Response } from 'express';
import { GetUser } from './GetUser';

class GetUserController {
    async handle(req: Request, res: Response){

        const getUser = new GetUser

        const result = await getUser.execute()

        res.status(200).json(result)
    }
}

export { GetUserController }