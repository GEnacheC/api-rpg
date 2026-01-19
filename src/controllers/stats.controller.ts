import { type Request, type Response } from 'express';
import UpdateStatsDto from '../models/dtos/stats.dto';
import StatsService from '../services/stats.service';
import UpdateCharacterAttributesValidator from '../validators/stats/updateCharacterAttributesValidator.validator';
import BaseController from '../common/controller/baseController.controller';

export default class StatsController extends BaseController {
    private service: StatsService;

    constructor() {
        super();
        this.service = new StatsService();
    }

    public async updateCharacterAttributes(req: Request, res: Response) {
        new UpdateCharacterAttributesValidator().check(req);

        const characterId = req.params.id as string;
        const statsList = req.body.map((item: any) => new UpdateStatsDto(item.idAttribute, item.value));
        await this.service.updateCharacterStats(characterId, statsList);
        return this.ReturnSuccessWithoutData(res);
    }
}