import { client } from "../../prisma/client"
import { compare } from "bcryptjs"

interface IRequest{
    username: string
    password: string
}

class AuthenticateUserCase {

    async execute({username, password}: IRequest){
        // verificar se usuário existe

        const userAlreadyExists = await client.user.findFirst({
            where: {
                username
            }
        });
        if(!userAlreadyExists){
            throw new Error("User or password incorrect")
        }

        // verificar se a senha está correta

        const passwordMatch = await compare(password, userAlreadyExists.password)

        if(!passwordMatch){
            throw new Error("User or password incorrect")
        }

        // gerar token do usuario 

        
    }

}

export { AuthenticateUserCase }