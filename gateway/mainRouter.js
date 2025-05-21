import { Router } from "express";
import authenticateToken from "./auth/middleware/authMiddleware.js";
import axios from "axios";


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















// User Details Service Routes
mainRouter.get("/user-details/:user_id", authenticateToken, async (req, res) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/user-details/${req.params.user_id}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.post("/user-details/:user_id", authenticateToken, async (req, res) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8000/user-details/${req.params.user_id}`, req.body, {
            headers: {
                'Authorization': `Bearer ${req.cookies.token || req.headers.authorization?.split(' ')[1]}`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.put("/user-details/:user_id", authenticateToken, async (req, res) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/user-details/${req.params.user_id}`, req.body, {
            headers: {
                'Authorization': `Bearer ${req.cookies.token || req.headers.authorization?.split(' ')[1]}`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.delete("/user-details/:user_id", authenticateToken, async (req, res) => {
    try {
        await axios.delete(`http://127.0.0.1:8000/user-details/${req.params.user_id}`, {
            headers: {
                'Authorization': `Bearer ${req.cookies.token || req.headers.authorization?.split(' ')[1]}`
            }
        });
        res.status(204).send();
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});















// Materiales Service Routes
mainRouter.get("/materiales/:material_id", authenticateToken, async (req, res) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8001/materiales/${req.params.material_id}`, {
            headers: {
                'Authorization': `Bearer ${req.cookies.token || req.headers.authorization?.split(' ')[1]}`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.get("/materiales", authenticateToken, async (req, res) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8001/materiales`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.post("/materiales", authenticateToken, async (req, res) => {

    let token = req.headers.authorization?.split(' ')[1];
    let payload = JSON.parse(atob(token.split('.')[1]));
    let auth_id = payload.auth_id;
    req.body.id_chatarreria = auth_id;

    try {
        const response = await axios.post(`http://127.0.0.1:8001/materiales/`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.put("/materiales/:material_id", authenticateToken, async (req, res) => {
    
    let token = req.headers.authorization?.split(' ')[1];
    let payload = JSON.parse(atob(token.split('.')[1]));
    let auth_id = payload.auth_id;
    req.body.id_chatarreria = auth_id;

    try {
        const response = await axios.put(`http://127.0.0.1:8001/materiales/${req.params.material_id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.delete("/materiales/:material_id", authenticateToken, async (req, res) => {
    try {
        await axios.delete(`http://127.0.0.1:8001/materiales/${req.params.material_id}`);
        res.status(204).send();
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

// aqui se hara el routing a los diferentes microservicios







export default mainRouter;
