import { Router } from 'express';

const postRouter = Router();

postRouter.post('/', (req, res) => {
  const {

  } = req.body;

  return res.json({

  });
});

export default postRouter;
