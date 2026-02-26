import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
    console.log("Auth middleware executado");
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: "Token missing" });
    }
    
    const [, token] = authHeader.split(" ");
    
    try {
        jwt.verify(token, process.env.JWT_SECRET!);
        next();
    } catch {
        return res.status(401).json({ message: "Invalid token" });
    }
}