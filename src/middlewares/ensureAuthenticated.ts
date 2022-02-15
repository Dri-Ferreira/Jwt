import { NextFunction } from 'express';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuth(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).json({message: "Token is missing"})
    }

    const [, token] = authToken.split(" ")
   
    try {
        verify(token, "96841663-a533-4d9a-9a22-e8ab0058ea6b")
        return next();
    } catch (error) {
        return res.status(401).json({message: "Token invalid"})
    }
}