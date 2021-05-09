import 'reflect-metadata';
import express from 'express';
import httpRoutes from './routes';
import './database';

const app = express();
const PORT = 3333;

app.use(express.json());

app.use(httpRoutes);

app.listen(3333, () => console.log(
  `Listening on: ${process.env.PORT || 'http://localhost:' + PORT}`
));
