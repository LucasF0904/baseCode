import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import AddressController from '@modules/shared/address/infra/http/controllers/AddressController';

const routes = Router();
const addressController = new AddressController();

routes.post('/', isAuthenticated, addressController.create);
routes.put('/:id', isAuthenticated, addressController.update);
routes.delete('/:id', isAuthenticated, addressController.delete);
routes.get('/', isAuthenticated, addressController.findAll);
routes.get('/:id', isAuthenticated, addressController.findById);

export default routes;




