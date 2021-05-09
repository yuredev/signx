import { Router } from 'express';
import createUser from '../services/createUser';

const userRouter = Router();

userRouter.post('/', async (req, res) => {
  const {
    password,
    username,
  } = req.body;

  const user = await createUser({
    password,
    username,
  });

  return res.json(user);
});

export default userRouter;
