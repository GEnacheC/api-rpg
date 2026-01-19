import { Router } from "express";
import StatsController from "../controllers/stats.controller";

const router = Router()
const controller = new StatsController();

router.patch("/:id", async (req, res) => {
    await controller.updateCharacterAttributes(req, res);
});

export default router;