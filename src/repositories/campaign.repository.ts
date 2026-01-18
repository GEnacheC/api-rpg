import { prisma } from "../database/prisma";
import CreateCampaignDto from "../models/dtos/campaign.dto";

export default class CampaignRepository {
    public static async createCampaign(campaignData: CreateCampaignDto) {
        const campaign = await prisma.campaign.create({
            data: {
                name: campaignData.getName(),
                master: campaignData.getMaster(),
                background: campaignData.getBackground()
            }
        })
        return campaign;
    }

    public static async assignCharacterToCampaign(characterId: string, campaignId: string) {
        const campaignCharacter = await prisma.campaignCharacter.create({
            data: {
                charId: characterId,
                campaignId: campaignId,
                finalDesc: "",
            }
        });
        return campaignCharacter;
    };
}