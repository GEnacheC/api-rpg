import { prisma } from "../database/prisma";

export default class AttributesCharacterRepository {
    public static async getCharacterAttributes(characterId: string, attrId: string[]) {
        const charAttr = await prisma.characterAttributes.findMany({
            where: {
                charId: characterId,
                attrId: { in: attrId }
            },
            select: {
                attrId: true,
                value: true
            }
        })
        return charAttr;
    }

    public static async updateCharacterAttribute(characterId: string, attrId: string, value: number) {
        await prisma.characterAttributes.update({
            where: {
                charId_attrId: {
                    charId: characterId,
                    attrId: attrId
                }
            },
            data: {
                value: value
            }
        })
    }
}