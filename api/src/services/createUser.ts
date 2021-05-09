import { getRepository } from 'typeorm';
import User from '../models/User';
import { hash } from 'bcryptjs';
import AppError from '../errors/AppError';

type UserDTO = {
  username: string;
  password: string;
}

async function createUser({ password, username }: UserDTO): Promise<UserDTO> {
  const userRepo = getRepository(User);

  const usernameWasAlreadyTaken = !!(await userRepo.findOne({
    where: { username },
  }));

  if (usernameWasAlreadyTaken) {
    throw new AppError('This username is already taken', 409);
  }

  const hashedPassword = await hash(password, 8);

  const user = userRepo.create({
    password: hashedPassword,
    username,
  });

  await userRepo.save(user);

  return user;
}

export default createUser;
