import { prisma } from "../database/prisma";
import CreateAttributeDto from "../models/dtos/attribute.dto";

export default class AttributeRepository {
    public static async createAttribute(attributeData: CreateAttributeDto) {
        const attribute = await prisma.attributes.create({
            data: {
                name: attributeData.getName(),
                description: attributeData.getDescription()
            }
        });
        return attribute;
    }
}