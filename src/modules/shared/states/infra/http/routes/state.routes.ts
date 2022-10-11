import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import StateController from '@modules/shared/states/infra/http/controllers/StateController';

const routes = Router();
const stateController = new StateController();

routes.post('/', isAuthenticated, stateController.create);
routes.put('/:id', isAuthenticated, stateController.update);
routes.delete('/:id', isAuthenticated, stateController.delete);
routes.get('/', isAuthenticated, stateController.findAll);
routes.get('/:id', isAuthenticated, stateController.findById);
routes.get('/findByShortName', isAuthenticated, stateController.findByShortName);
routes.get('/findByLongName', isAuthenticated, stateController.findByLongName);

export default routes;




