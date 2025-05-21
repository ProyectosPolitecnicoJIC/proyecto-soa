import { JwtService } from "../services/jwtTokenService.js";

// Middleware de autenticación
const authenticateToken = async (req, res, next) => {
    let token;
    console.log(req.headers);
    try {
        if (req.headers.authorization) {
            token = req.headers.authorization.split(' ')[1];
        }
    } catch (error) {
        return res.status(401).json({ message: "Token no proporcionado" });
    }

    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado" });
    }

    try {
        const decoded = JwtService.verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido" });
    }
};

export default authenticateToken;