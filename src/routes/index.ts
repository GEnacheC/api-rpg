import { Router } from "express";
import protocolRoutes from "./protocol.routes";

const router = Router();

// rotas agrupadas
router.use("/protocols", protocolRoutes);

// rota simples de teste
router.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

export default router;