import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import PhoneController from '@modules/shared/phone/infra/http/controllers/PhoneController';

const routes = Router();
const phoneController = new PhoneController();

routes.post('/', isAuthenticated, phoneController.create);
routes.put('/:id', isAuthenticated, phoneController.update);
routes.delete('/:id', isAuthenticated, phoneController.delete);
routes.get('/', isAuthenticated, phoneController.findAll);
routes.get('/:id', isAuthenticated, phoneController.findById);

export default routes;




