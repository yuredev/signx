import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import User from '../models/User';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

type Credentials = {
  username: string;
  password: string;
}

type AuthenticationResponse = {
  token: string;
  user: Omit<User, 'password'>;
}

async function authUser({
  username,
  password,
}: Credentials): Promise<AuthenticationResponse> {
  const userRepo = getRepository(User);

  const user = await userRepo.findOne({ where: { username } });

  if (!user) {
    throw new AppError('The username does not belong to any account', 403);
  }

  const thePasswordsMatch = await compare(password, user.password);

  if (!thePasswordsMatch) {
    throw new AppError('Incorrect password', 403);
  }

  const token = sign({}, authConfig.secret, {
    subject: user.id,
    expiresIn: authConfig.expiresIn
  });

  const {
    password: _,
    ...userWithoutPassword
  } = user;

  return { user: userWithoutPassword, token };
}

export default authUser;
