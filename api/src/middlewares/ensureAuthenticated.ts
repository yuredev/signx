import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

type PayloadToken = {
  iat: number;
  exp: number;
  sub: string;
};

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppError('Missing authorization token', 401);
  }

  const [, token] = authorization?.split(' ');

  try {
    const payload = verify(token, authConfig.secret) as PayloadToken;
    res.locals.user = payload.sub;
    return next();
  } catch (error) {
    throw new AppError('Invalid JWT token', 401);
  }
};
