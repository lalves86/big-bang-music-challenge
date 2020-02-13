import { Router } from 'express';
import WeatherController from './controllers/WeatherController';

const routes = new Router();

routes.post('/', WeatherController.index);

export default routes;
