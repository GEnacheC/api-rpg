import BaseRepository from "../common/repository/baseRepository.repository";
import CreateCampaignDto from "../models/dtos/campaign.dto";

export default class CampaignRepository extends BaseRepository {

    constructor() {
        super();
    }   

    public async createCampaign(campaignData: CreateCampaignDto) {
        const campaign = await this.epc().campaign.create({
            data: {
                name: campaignData.getName(),
                master: campaignData.getMaster(),
                background: campaignData.getBackground()
            }
        })
        return campaign;
    }

    public async assignCharacterToCampaign(characterId: string, campaignId: string) {
        const campaignCharacter = await this.epc().campaignCharacter.create({
            data: {
                charId: characterId,
                campaignId: campaignId,
                finalDesc: "",
            }
        });
        return campaignCharacter;
    };
}