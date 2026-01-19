import BaseService from "../common/service/baseService.service";
import CreateAttributeDto from "../models/dtos/attribute.dto";
import AttributeRepository from "../repositories/attribute.repository";

export default class AttributeService extends BaseService {

    private repository: AttributeRepository;

    constructor() { 
        super();
        this.repository = new AttributeRepository();
    }

    public async createAttribute(attributeData: CreateAttributeDto) {
        await this.repository.createAttribute(attributeData);
    }
}