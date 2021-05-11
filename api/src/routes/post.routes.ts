import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const postRouter = Router();

postRouter.post('/', ensureAuthenticated, (req, res) => {
  const {

  } = req.body;

  return res.json({

  });
});

export default postRouter;
