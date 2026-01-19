import { Router } from "express";
import CampaignController from "../controllers/campaign.controller";


const router = Router()

const controller = new CampaignController();

router.post("/", async (req, res) => {
    await controller.createCampaign(req, res);
});

export default router;