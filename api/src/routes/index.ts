import { Router } from 'express';
import postRouter from './post.routes';
import sessionRouter from './session.routes';
import userRouter from './user.routes';

const appRouter = Router();

appRouter.use('/user', userRouter);
appRouter.use('/post', postRouter);
appRouter.use('/session', sessionRouter);

export default appRouter;
