import { Router } from "express";
import { AuthenticateUserController } from "./useCase/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCase/createUsers/CreateUserController";

const router = Router();

const createUser = new CreateUserController
const authenticateUser = new AuthenticateUserController


router.post('/users', createUser.handle);
router.post('/login', authenticateUser.hadle);

export { router }