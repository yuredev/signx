import { Router } from 'express';
import User from '../models/User';
import authUser from '../services/authUser';

const sessionRouter = Router();

sessionRouter.post('/', async (req, res) => {
  const { username, password } = req.body;
  
  const { token, user } = (await authUser({
    username,
    password,
  }));

  return res.json({ token, user });
});

export default sessionRouter;
