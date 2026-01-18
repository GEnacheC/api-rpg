import { Router } from "express";
import CampaignController from "../controllers/campaign.controller";


const router = Router()

router.post("/", async (req, res) => {
    await CampaignController.createCampaign(req, res);
});

export default router;