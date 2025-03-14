import { JwtService } from "../services/jwtTokenService";

class AuthMiddleware {
    
    async validateToken(req, res, next) {
        try {
            const token = req.cookies.token;
            if (!token) {
                return res.status(401).send({
                    message: 'No token provided'
                });
            }

            const decoded = JwtService.verifyToken(token);
            console.log(decoded);
            req.userId = decoded.id;
            next();
        } catch (error) {
            return res.status(401).send({
                message: 'Unauthorized!'
            });
        }
    }
}