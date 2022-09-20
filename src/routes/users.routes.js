import { Router } from 'express';
import { getUsers, addUser } from '../controller/users.controller.js';

const userRouter = new Router();

userRouter.route('/').get(getUsers).post(addUser);

export default userRouter;
