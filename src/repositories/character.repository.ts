import { AttributesCampaign } from "../../generated/prisma/browser";
import { prisma } from "../database/prisma";
import CreateCharacterDto from "../models/dtos/character.dto";

export default class CharacterRepository {
    public static async listCharacters(params: { page: number; limit: number; search?: string }) {
        const characters = await prisma.character.findMany({
            skip: (params.page - 1) * params.limit,
            take: params.limit,
            select: {
                name: true,
                surname: true,
                background: true,
            },
            where: params.search
                ? {
                    OR: [
                        { name: { contains: params.search, mode: "insensitive" } },
                        { surname: { contains: params.search, mode: "insensitive" } },
                        { background: { contains: params.search, mode: "insensitive" } },
                    ]
                } : undefined
        })
        return characters
    }

    public static async createCharacter(characterData: CreateCharacterDto, listAttr: AttributesCampaign[]) {
        const character = await prisma.character.create({
            data: {
                name: characterData.getName(),
                surname: characterData.getSurname(),
                background: characterData.getBackground(),
                userId: characterData.getUserId(),

                baseAttributes: {
                    create: listAttr.map(a => ({
                        attrId: a.attrId,
                        value: a.value ?? 0,
                    }))
                },
                
                attributes: {
                    create: listAttr.map(a => ({
                        attrId: a.attrId,
                        value: 1,
                    }))
                }
            }
        });
        return character;
    }
}