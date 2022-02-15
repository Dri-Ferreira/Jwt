import { Request, Response} from "express"
import { CreateUser } from "./CreateUser"

class CreateUserController {
    async handle(req: Request, res: Response){
        const { name, username, password} = req.body

        const createUser = new CreateUser()

        const user = await createUser.execute({name, username, password})

        res.status(200).json(user)
    }
}

export { CreateUserController }