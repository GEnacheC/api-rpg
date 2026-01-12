import express, { type Request, type Response } from 'express';
import router from './routes/index.ts';

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});