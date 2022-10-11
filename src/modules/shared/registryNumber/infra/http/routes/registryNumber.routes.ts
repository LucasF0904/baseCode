import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import RegistryNumberController from '@modules/shared/registryNumber/infra/http/controllers/RegistryNumberController';

const routes = Router();
const registryNumberController = new RegistryNumberController();

routes.post('/', isAuthenticated, registryNumberController.create);
routes.put('/:id', isAuthenticated, registryNumberController.update);
routes.delete('/:id', isAuthenticated, registryNumberController.delete);
routes.get('/', isAuthenticated, registryNumberController.findAll);
routes.get('/:id', isAuthenticated, registryNumberController.findById);

export default routes;




