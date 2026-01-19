import { Router } from "express";
import AttributeController from "../controllers/attribute.controller";

const router = Router();
const controller = new AttributeController();

router.post("/", async (req, res) => {
    await controller.createAttribute(req, res);
});

export default router;