import { type Request, type Response } from 'express';
import CreateCampaignDto from '../models/dtos/campaign.dto';
import CampaignService from '../services/campaign.service';
import BaseController from '../common/controller/baseController.controller';
import CreateCampaignValidator from '../validators/campaign/createCampaignValidator.validator';

export default class CampaignController extends BaseController {

    private service: CampaignService;

    constructor() {
        super();
        this.service = new CampaignService();
    }

    public async createCampaign(req: Request, res: Response) {
        new CreateCampaignValidator().check(req);

        const campaignData = new CreateCampaignDto(req.body.name, req.body.master, req.body.background);
        await this.service.createCampaign(campaignData);
        return this.ReturnCreatedWithoutData(res);
    }
}