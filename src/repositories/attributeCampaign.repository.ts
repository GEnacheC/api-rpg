import BaseRepository from "../common/repository/baseRepository.repository";

export default class AttributeCampaignRepository extends BaseRepository {

    constructor() {
        super();
    }

    public async getAttributesByCampaign(campaignId: string) {
        const attributesCampaign = await this.epc().attributesCampaign.findMany({
            where: { campaignId: campaignId },
        });
        return attributesCampaign;
    };
}