import { Request, Response, Router, type NextFunction  } from "express";
import protocolRoutes from "./protocol.routes";
import characterRoutes from "./character.routes";
import attributeRoutes from "./attribute.routes";
import campaignRoutes from "./campaign.routes";
import statsRoutes from "./stats.routes";
import UserController from "../controllers/user.controller";
import basicAuth from "../middlewares/basicauth.middleware";
import bearerAuth from "../middlewares/bearerauth.middleware";
import ErrorHandlerMiddleware from "../middlewares/errorHandler.middleware";

const router = Router();

const authController = new UserController();

// rotas agrupadas
router.use("/protocols", bearerAuth(), protocolRoutes);
router.use("/characters", bearerAuth(), characterRoutes);
router.use("/attributes", bearerAuth(), attributeRoutes);
router.use("/campaigns", bearerAuth(), campaignRoutes);
router.use("/stats", bearerAuth(), statsRoutes);

router.post("/signup", basicAuth(), async (req, res) => await authController.createUser(req, res));
router.post("/signin", basicAuth(), async (req, res) => await authController.loginUser(req, res));

// rota simples de teste
router.get("/", (_, res) => {
  res.json({ message: "API is running 🚀" });
});

router.use(ErrorHandlerMiddleware);

export default router;