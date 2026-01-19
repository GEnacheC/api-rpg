import BaseRepository from "../common/repository/baseRepository.repository";

export default class AttributesCharacterRepository extends BaseRepository{

    constructor() {
        super();
    }

    public async getCharacterAttributes(characterId: string, attrId: string[]) {
        const charAttr = await this.epc().characterAttributes.findMany({
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

    public updateCharacterAttribute(characterId: string, attrId: string, value: number) {
        const operation = this.epc().characterAttributes.update({
            where: {
                charId_attrId: {
                    charId: characterId,
                    attrId: attrId
                }
            },
            data: {
                value: value
            }
        });

        this.addOperation(operation);
    }
}