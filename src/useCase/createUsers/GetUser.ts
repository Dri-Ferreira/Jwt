import { client } from "../../prisma/client"

interface IUserRequest {
    name: string;
    username: string
    password: string
}

class GetUser {
    async execute() {
        const find = await client.user.findMany()

        return find
    }

}

export { GetUser }