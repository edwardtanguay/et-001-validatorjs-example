import express from 'express';
import { index } from './routes/index.routes.js';
import userRouter from './routes/users.routes.js';

const PORT = 4000;

const app = express();
app.use(express.json());

app.get('/', index);
app.use('/users', userRouter);

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
