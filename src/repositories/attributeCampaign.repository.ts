import { prisma } from "../database/prisma";

export default class AttributeCampaignRepository {
    public static async getAttributesByCampaign(campaignId: string) {
        const attributesCampaign = await prisma.attributesCampaign.findMany({
            where: { campaignId: campaignId },
        });
        return attributesCampaign;
    };

    public static async createAttributeCampaign(attributeId: string, campaignId: string, value?: number) {
        const attributeCampaign = await prisma.attributesCampaign.create({
            data: {
                attrId: attributeId,
                campaignId: campaignId,
                value: value,
            }
        });
        return attributeCampaign;
    }
}