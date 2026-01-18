import CreateCharacterDto from "../models/dtos/character.dto";
import AttributeCampaignRepository from "../repositories/attributeCampaign.repository";
import CampaignRepository from "../repositories/campaign.repository";
import CharacterRepository from "../repositories/character.repository";

interface ListUsers{
  page: number;
  limit: number;
  search?: string;
}

export default class CharacterService {
    public static async listCharacters(params: ListUsers) {
        if (params.limit > 100) {
            throw new Error("Limit alto demais");
        }
        return await CharacterRepository.listCharacters(params);
    }

    public static async createCharacter(characterData: CreateCharacterDto) {
        const listAttr = await AttributeCampaignRepository.getAttributesByCampaign(characterData.getCampaignId());
        const character = await CharacterRepository.createCharacter(characterData, listAttr);
        await CampaignRepository.assignCharacterToCampaign(character.id, characterData.getCampaignId());
    }
}