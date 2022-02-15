import { sign } from 'jsonwebtoken';


class GenerateTokenProvider {
    async execute(userId: string){
        const token = sign({}, "96841663-a533-4d9a-9a22-e8ab0058ea6b",{
            subject: userId,
            expiresIn: "20s"
        });
        return token
    }
}

export { GenerateTokenProvider }