import { Router } from "express";
import protocolRoutes from "./protocol.routes";
import characterRoutes from "./character.routes";
import UserController from "../controllers/user.controller";
import basicAuth from "../middlewares/basicauth.middleware";
import bearerAuth from "../middlewares/bearerauth.middleware";

const router = Router();

// rotas agrupadas
router.use("/protocols", bearerAuth(), protocolRoutes);
router.use("/users", bearerAuth(), protocolRoutes);
router.use("/characters", bearerAuth(), characterRoutes);

router.post("/signup", basicAuth(), UserController.createUser);
router.post("/signin", basicAuth(), UserController.loginUser);

// rota simples de teste
router.get("/", (_, res) => {
  res.json({ message: "API is running 🚀" });
});

export default router;