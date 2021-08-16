import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization;

  // Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(' ');

  // Validar se token é válido
  try {
    const { sub } = verify(
      token,
      '42a0e91c68a8a59a19a6530d9e15c812'
    ) as IPayload;

    // Recuperar informações do usuário
    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
