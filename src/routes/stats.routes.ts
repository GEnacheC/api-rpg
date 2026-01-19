import { Router } from "express";
import StatsController from "../controllers/stats.controller";

const router = Router()

router.patch("/:id", async (req, res) => {
    await StatsController.updateCharacterAttributes(req, res);
});

export default router;