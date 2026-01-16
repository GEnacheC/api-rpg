import CharacterDto from "../models/dtos/character.dto";
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

    public static async createCharacter(characterData: CharacterDto) {
        await CharacterRepository.createCharacter(characterData);
    }
}