import { Router } from "express";
import AttributeController from "../controllers/attribute.controller";

const router = Router();

// router.get()

router.post("/", async (req, res) => {
    await AttributeController.createAttribute(req, res);
});

export default router;