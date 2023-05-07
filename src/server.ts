import express from 'express';
const app = express();
const port = 3000;

import todosRoutes from './routes';

app.use(express.json());

app.use(todosRoutes);

app.listen(port, () => console.log(`app listening on port ${port}!`));