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
        const response = await axios.get(`http://127.0.0.1:8000/users/${req.params.user_id}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.get("/user-details", authenticateToken, async (req, res) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/users`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.post("/user-details", authenticateToken, async (req, res) => {
    let token = req.headers.authorization?.split(' ')[1];
    let payload = JSON.parse(atob(token.split('.')[1]));
    let id = payload.auth_id;
    req.body.id = id;
    try {
        const response = await axios.post(`http://127.0.0.1:8000/users`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.put("/user-details/:user_id", authenticateToken, async (req, res) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/users/${req.params.user_id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.delete("/user-details/:user_id", authenticateToken, async (req, res) => {
    try {
        await axios.delete(`http://127.0.0.1:8000/users/${req.params.user_id}`);
        res.status(204).send();
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});




// ORDERS

mainRouter.get("/orders/:order_id", authenticateToken, async (req, res) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8002/orders/${req.params.order_id}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.get("/orders", authenticateToken, async (req, res) => {
    
    try {
        const response = await axios.get(`http://127.0.0.1:8002/orders`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.post("/orders", authenticateToken, async (req, res) => {
    let token = req.headers.authorization?.split(' ')[1];
    let payload = JSON.parse(atob(token.split('.')[1]));
    let id = payload.auth_id;
    req.body.id_usuario = id;
    try {
        const materialCuantities = await axios.get(`http://127.0.0.1:8001/materiales/${req.params.material_id}`);
        if (materialCuantities.data.cantidad < req.body.cantidad) {
            return res.status(400).json({ message: "No hay suficiente material disponible" });
        }
        const response = await axios.post(`http://127.0.0.1:8002/orders`, req.body);
        res.json(response.data);

        // Actualizar la cantidad de material

        const updatedMaterial = {
            ...materialCuantities.data,
            cantidad: materialCuantities.data.cantidad - req.body.cantidad
        };

        await axios.put(`http://127.0.0.1:8001/materiales/${req.params.material_id}`, updatedMaterial);
        
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.put("/orders/:order_id", authenticateToken, async (req, res) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8002/orders/${req.params.order_id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});

mainRouter.delete("/orders/:order_id", authenticateToken, async (req, res) => {
    try {
        await axios.delete(`http://127.0.0.1:8002/orders/${req.params.order_id}`);
        res.status(204).send();
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
});










// Materiales Service Routes
mainRouter.get("/materiales/:material_id", authenticateToken, async (req, res) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8001/materiales/${req.params.material_id}`);
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
