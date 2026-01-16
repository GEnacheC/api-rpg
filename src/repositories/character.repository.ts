import { prisma } from "../database/prisma";
import CharacterDto from "../models/dtos/character.dto";

export default class CharacterRepository {
    public static async createCharacter(characterData: CharacterDto) {
        const character = await prisma.character.create({
            data: {
                name: characterData.getName(),
                surname: characterData.getSurname(),
                background: characterData.getBackground(),
                userId: characterData.getUserId()
            }
        });
        return character;
    }
}