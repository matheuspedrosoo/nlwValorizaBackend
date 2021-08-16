import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    //Verificar se email existe
    const user = await usersRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error('Email/Password incorrect');
    }

    //Verificar se senha está correta
    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      throw new Error('Email/Password incorrect');
    }

    //Gerar token
    const token = sign(
      {
        email: user.email,
      },
      '42a0e91c68a8a59a19a6530d9e15c812',
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );
    return token;
  }
}

export { AuthenticateUserService };
