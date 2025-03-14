import jwt from "jsonwebtoken";
import jwtConfig from "./jwtConfig.js";

export class JwtService {
    static generateToken(payload) {
      return jwt.sign(payload, jwtConfig.JWT_SECRET, {
        expiresIn: jwtConfig.JWT_EXPIRES_IN,
      });
    }
  
    static verifyToken(token) {
      try {
        return jwt.verify(token, jwtConfig.JWT_SECRET);
      } catch (error) {
        throw new Error("Token inválido o expirado");
      }
    }
  }