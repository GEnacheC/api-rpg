import { Router } from "express";
import ProtocolController from "../controllers/protocol.controller";

const router = Router();
const controller = new ProtocolController();

router.get("/", (_, res) => {
  res.json({ message: "Protocol routes are working!" });
});

router.post("/", async (req, res) => {
    await controller.createProtocol(req, res);
});


export default router;