import CreateAttributeDto from "../models/dtos/attribute.dto";
import AttributeRepository from "../repositories/attribute.repository";

export default class AttributeService {
    public static async createAttribute(attributeData: CreateAttributeDto) {
        await AttributeRepository.createAttribute(attributeData);
    }
}