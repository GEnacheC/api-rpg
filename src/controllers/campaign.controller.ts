import { type Request, type Response } from 'express';
import CreateCampaignDto from '../models/dtos/campaign.dto';
import CampaignService from '../services/campaign.service';

export default class CampaignController {
    public static async createCampaign(req: Request, res: Response) {
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is missing' });
        }

        const errors = []
        if (!req.body.name) errors.push('Name is required');
        if (!req.body.master) errors.push('Master is required');
        if (!req.body.background) errors.push('Background is required');

        if (errors.length > 0) {
            return res.status(400).json({ errors: errors });
        }

        const campaignData = new CreateCampaignDto(req.body.name, req.body.master, req.body.background);
        await CampaignService.createCampaign(campaignData);
        return res.status(201).json({ message: 'Campaign created successfully' });
    }
}