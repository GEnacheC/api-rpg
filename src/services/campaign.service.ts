import CreateCampaignDto from "../models/dtos/campaign.dto";
import CampaignRepository from "../repositories/campaign.repository";

export default class CampaignService {
    public static async createCampaign(campaignData: CreateCampaignDto): Promise<void> {
        await CampaignRepository.createCampaign(campaignData);
    }
}