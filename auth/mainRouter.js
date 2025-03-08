import { Router } from "express";

const mainRouter = Router();

mainRouter.get('/health', (req, res) => {
    res.send({
        "server_status": "running",
        "code": 200
    });
    }
);


/* Auth router */
import authRouter from './auth/controller/authRouter.js';
mainRouter.use('/auth', authRouter);







export default mainRouter;
