import { Request, Response } from 'express';
import { RefreshTokenUser } from './RefreshTokenUser';

class RefreshUserController {

    async handle(req: Request, res: Response) {
        const { refresh_token } = req.body
        const refreshTokenUser = new RefreshTokenUser()

        const token = await refreshTokenUser.execute(refresh_token)

        return res.json(token)
    }   

}

export { RefreshUserController }