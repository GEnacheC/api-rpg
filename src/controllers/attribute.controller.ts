import { type Request, type Response } from 'express';
import CreateAttributeDto from '../models/dtos/attribute.dto';
import AttributeService from '../services/attribute.service';
import BaseController from '../common/controller/baseController.controller';
import CreateAttributeValidator from '../validators/attribute/CreateAtributteValidator.validator';

export default class AttributeController extends BaseController {
    private service: AttributeService;

    constructor() {
        super();
        this.service = new AttributeService();
    }

    public async createAttribute(req: Request, res: Response) {
        new CreateAttributeValidator().check(req);

        const attributeData = new CreateAttributeDto(req.body.name, req.body.description);
        await this.service.createAttribute(attributeData);
        return this.ReturnCreatedWithoutData(res);
    }   
}