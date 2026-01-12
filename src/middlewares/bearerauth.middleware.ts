import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";

function bearerAuth() {
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    console.error("JWT_SECRET não está definido no .env");
    process.exit(1);
  }

  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Token ausente ou inválido" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, JWT_SECRET);

      // opcional: anexar o usuário ao request
      (req as any).user = decoded;

      next();
    } catch (error) {
      return res.status(403).json({ error: "Token inválido ou expirado" });
    }
  };
};

export default bearerAuth;