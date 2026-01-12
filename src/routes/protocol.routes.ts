import { Router } from "express";
import ProtocolController from "../controllers/protocol.controller";

const router = Router();

router.get("/", (_, res) => {
  res.json({ message: "Protocol routes are working!" });
});

router.post("/", async (_, res) => {
    await ProtocolController.createProtocol(res);
});


export default router;