import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'Hello typescript node, testando o salvamento' }));

export default routes;
