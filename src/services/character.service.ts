import BaseService from "../common/service/baseService.service";
import CreateCharacterDto from "../models/dtos/character.dto";
import AttributeCampaignRepository from "../repositories/attributeCampaign.repository";
import CampaignRepository from "../repositories/campaign.repository";
import CharacterRepository from "../repositories/character.repository";

interface ListUsers{
  page: number;
  limit: number;
  search?: string;
}

export interface UpdateCharacterData {
  name?: string;
  surname?: string;
  background?: string;
}

export default class CharacterService extends BaseService {
    private repository: CharacterRepository;
    private campaignRepository: CampaignRepository;
    private attributeCampaignRepository: AttributeCampaignRepository;

    constructor() {
        super();
        this.repository = new CharacterRepository();
        this.campaignRepository = new CampaignRepository();
        this.attributeCampaignRepository = new AttributeCampaignRepository();
    }


    public async listCharacters(params: ListUsers) {
        if (params.limit > 100) {
            throw new Error("Limit alto demais");
        }
        return await this.repository.listCharacters(params);
    }

    public async createCharacter(characterData: CreateCharacterDto) {
        const listAttr = await this.attributeCampaignRepository.getAttributesByCampaign(characterData.getCampaignId());
        const character = await this.repository.createCharacter(characterData, listAttr);
        await this.campaignRepository.assignCharacterToCampaign(character.id, characterData.getCampaignId());
    }

    public async updateCharacter(userId: string, characterId: string, updateData: UpdateCharacterData) {
        await this.repository.updateCharacter(userId, characterId, updateData);
    }
}