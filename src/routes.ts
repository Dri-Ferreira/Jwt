import { Router } from "express";
import { ensureAuth } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCase/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCase/createUsers/CreateUserController";
import { GetUserController } from "./useCase/createUsers/GetUserController";

const router = Router();

const createUser = new CreateUserController
const authenticateUser = new AuthenticateUserController
const getUserController = new GetUserController


router.post('/users', createUser.handle);
router.post('/login', authenticateUser.hadle);
router.get('/buscar', ensureAuth, getUserController.handle)

export { router }