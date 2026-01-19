import BaseRepository from "../common/repository/baseRepository.repository";
import CreateAttributeDto from "../models/dtos/attribute.dto";

export default class AttributeRepository extends BaseRepository {
    constructor() {
        super();
    }

    public async createAttribute(attributeData: CreateAttributeDto) {
        const attribute = await this.epc().attributes.create({
            data: {
                name: attributeData.getName(),
                description: attributeData.getDescription()
            }
        });
        return attribute;
    }
}