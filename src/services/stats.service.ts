import UpdateStatsDto from "../models/dtos/stats.dto";
import AttributesCharacterRepository from "../repositories/attributesCharacter.repository";

export default class StatsService {
    public static async updateCharacterStats(characterId: string, statsList: UpdateStatsDto[]) {
        const valuesAttrIds = await AttributesCharacterRepository
                                .getCharacterAttributes(characterId, 
                                    statsList.map(stat => stat.getIdAttribute()));
        statsList.map(async (val) => {
            const oldValue = valuesAttrIds.find(stat => stat.attrId === val.getIdAttribute())!.value as number;
            const newValue = this.updateValue(oldValue, val.getValue());
            await AttributesCharacterRepository.updateCharacterAttribute(characterId, val.getIdAttribute(), newValue);
        });



    }

    private static updateValue(oldValue: number, plusValue: number) {
        return oldValue + plusValue;
    }
}