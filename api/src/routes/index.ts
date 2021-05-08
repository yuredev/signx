import { Router } from 'express';
import postRouter from './post.routes';
import userRouter from './user.routes';

const appRouter = Router();

appRouter.use('/user', userRouter);
appRouter.use('/post', postRouter);

export default appRouter;
