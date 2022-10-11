import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import CityController from '@modules/shared/cities/infra/http/controllers/CitiesController';

const routes = Router();
const cityController = new CityController();

routes.post('/', isAuthenticated, cityController.create);
routes.put('/:id', isAuthenticated, cityController.update);
routes.delete('/:id', isAuthenticated, cityController.delete);
routes.get('/', isAuthenticated, cityController.findAll);
routes.get('/:id', isAuthenticated, cityController.findById);
routes.get('/findByCode', isAuthenticated, cityController.findByCode);
routes.get('/findByName', isAuthenticated, cityController.findByName);

export default routes;




