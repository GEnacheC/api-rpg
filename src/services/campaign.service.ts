import BaseService from "../common/service/baseService.service";
import CreateCampaignDto from "../models/dtos/campaign.dto";
import CampaignRepository from "../repositories/campaign.repository";

export default class CampaignService extends BaseService {
    private repository: CampaignRepository;

    constructor() {
        super();
        this.repository = new CampaignRepository();
    }

    public async createCampaign(campaignData: CreateCampaignDto): Promise<void> {
        await this.repository.createCampaign(campaignData);
    }
}