import { type Request, type Response } from 'express';
import ProtocolService from '../services/protocol.service';
import BaseController from '../common/controller/baseController.controller';
import CreateProtocolValidator from '../validators/protocol/createProtocolValidator.validator';


export default class ProtocolController extends BaseController {
    private service: ProtocolService;

    constructor() {
        super();
        this.service = new ProtocolService();
    }

    public async createProtocol(req: Request, res: Response) {
        new CreateProtocolValidator().check(req);   


        await this.service.createProtocol();

        return this.ReturnCreatedWithoutData(res);
    }
}