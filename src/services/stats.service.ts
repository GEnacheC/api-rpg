import BaseService from "../common/service/baseService.service";
import UpdateStatsDto from "../models/dtos/stats.dto";
import AttributesCharacterRepository from "../repositories/attributesCharacter.repository";

export default class StatsService extends BaseService {

    private repository: AttributesCharacterRepository;

    constructor() {
        super();
        this.repository = new AttributesCharacterRepository();
    }

    public async updateCharacterStats(characterId: string, statsList: UpdateStatsDto[]) {
        const valuesAttrIds = await this.repository.getCharacterAttributes(characterId, 
                                    statsList.map(stat => stat.getIdAttribute()));
        statsList.map(async (val) => {
            const oldValue = valuesAttrIds.find(stat => stat.attrId === val.getIdAttribute())!.value as number;
            const newValue = this.updateValue(oldValue, val.getValue());
            this.repository.updateCharacterAttribute(characterId, val.getIdAttribute(), newValue);
        });

        this.repository.commit();
    }

    private updateValue(oldValue: number, plusValue: number) {
        return oldValue + plusValue;
    }
}