import { Request, Response } from 'express';
import { AuthenticateUserCase } from './AuthenticateUserCase';


class AuthenticateUserController {
    async hadle(req: Request, res: Response){
        const { username, password} = req.body;

        const authenticateUserCase = new AuthenticateUserCase()

        const token = await authenticateUserCase.execute({
            username,
            password
        })

        return res.json(token)
    }
}

export { AuthenticateUserController}