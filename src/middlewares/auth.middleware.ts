import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
  };
}

interface TokenPayload {
  id: number;
  email: string;
}

export function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response
      .status(401)
      .json({ error: "Token de autenticação não fornecido." });
  }

  const token = authHeader.replace(/^Bearer\s/i, "").trim();

  if (!token) {
    return response
      .status(401)
      .json({ error: "Token de autenticação inválido." });
  }

  try {
    const jwtScret = process.env.JWT_SECRET;
    if (!jwtScret) {
      return response
        .status(500)
        .json({ error: "chave secreta não configurada." });
    }

    const decoded = jwt.verify(token, jwtScret) as TokenPayload;
    (request as AuthRequest).user = { id: decoded.id, email: decoded.email };
    return next();
  } catch (error) {
    return response.status(401).json({ error: "Token inválido ou expirado." });
  }
}
