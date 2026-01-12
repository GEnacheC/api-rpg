import { Router } from "express";
import protocolRoutes from "./protocol.routes";
import UserController from "../controllers/user.controller";

const router = Router();

// rotas agrupadas
router.use("/protocols", protocolRoutes);
router.use("/users", protocolRoutes);

router.post("/signup", UserController.createUser);

// rota simples de teste
router.get("/", (_, res) => {
  res.json({ message: "API is running 🚀" });
});

export default router;