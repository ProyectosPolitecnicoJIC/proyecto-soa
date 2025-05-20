import { Router } from "express";
import { authRepository } from "../repository/authRepository.js";
import { JwtService } from "../services/jwtTokenService.js";

const authRouter = Router();

const authRepo = new authRepository();
const jwtService = new JwtService();

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await authRepo.login(email, password);
        const token = JwtService.generateToken({ auth_id: result.auth.auth_id });
        const responseDTO = {
            token: token,
            user_id: result.auth.auth_id,
        }
        res.cookie("token", token, { httpOnly: true }).json(responseDTO).status(200);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
);

authRouter.post("/register", async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await authRepo.register(email, password);
        res.json(result);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
);



export default authRouter;