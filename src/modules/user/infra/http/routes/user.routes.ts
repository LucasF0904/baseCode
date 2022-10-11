import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import UserController from '@modules/user/infra/http/controllers/UsersController';

const routes = Router();
const userController = new UserController();

routes.post('/', isAuthenticated, userController.create);
routes.put('/:id', isAuthenticated, userController.update);
routes.delete('/:id', isAuthenticated, userController.delete);
routes.get('/', isAuthenticated, userController.findAll);
routes.get('/:id', isAuthenticated, userController.findById);

export default routes;