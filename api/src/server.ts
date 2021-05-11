import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import httpRoutes from './routes';
import './database';
import globalExceptionHandler from './middlewares/globalExceptionHandler';

const app = express();
const PORT = 3333;

app.use(express.json());

app.use(httpRoutes);

app.use(globalExceptionHandler);

app.listen(3333, () => console.log(
  `Listening on: ${process.env.PORT || 'http://localhost:' + PORT}`
));
