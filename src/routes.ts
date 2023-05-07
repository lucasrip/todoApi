import express from 'express';
import todoController from './todoController/todoController';
const todosRoutes = express.Router();

todosRoutes.post('/todos',todoController.create);

todosRoutes.get('/todos',todoController.all);

todosRoutes.put('/todos',todoController.alter);

todosRoutes.delete('/todos/:id',todoController.delete);

export default todosRoutes;