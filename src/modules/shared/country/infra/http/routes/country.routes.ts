import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import CountryController from '@modules/shared/country/infra/http/controllers/CountryController';

const routes = Router();
const countryController = new CountryController();

routes.post('/', isAuthenticated, countryController.create);
routes.put('/:id', isAuthenticated, countryController.update);
routes.delete('/:id', isAuthenticated, countryController.delete);
routes.get('/', isAuthenticated, countryController.findAll);
routes.get('/:id', isAuthenticated, countryController.findById);
routes.get('/findByCode', isAuthenticated, countryController.findByShortName);
routes.get('/findByShortName', isAuthenticated, countryController.findByShortName);
routes.get('/findByLongName', isAuthenticated, countryController.findByLongName);

export default routes;




