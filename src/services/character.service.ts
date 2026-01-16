import CharacterDto from "../models/dtos/character.dto";
import CharacterRepository from "../repositories/character.repository";

export default class CharacterService {
    public static async createCharacter(characterData: CharacterDto) {
        await CharacterRepository.createCharacter(characterData);
    }
}