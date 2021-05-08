import { Router } from 'express';

const userRouter = Router();

userRouter.post('/', (req, res) => {
  const {
    email,
    password,
    name,
  } = req.body;

  return res.json({
    email,
    password,
    name,
  });
});

export default userRouter;
