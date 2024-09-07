import express, { Request, Response } from 'express';
import 'dotenv/config';

import {solveIntents} from './solver';

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

solveIntents();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
