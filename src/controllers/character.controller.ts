import { type Request, type Response } from "express";
import CreateCharacterDto from "../models/dtos/character.dto";
import CharacterService from "../services/character.service";
import BaseController from "../common/controller/baseController.controller";
import CreateCharacterValidator from "../validators/character/createCharacterValidator.validator";
import ListCharacterValidator from "../validators/character/listCharacterValidator.validator";
import UpdateCharacterValidator from "../validators/character/updateCharacterValidator.validator";

export default class CharacterController extends BaseController {
    private service: CharacterService;

    constructor() {
        super();
        this.service = new CharacterService();
    }

    public async getCharacters(req: Request, res: Response) {
        new ListCharacterValidator().check(req);
        
        const queryParams = {
            page: Number(req.query.page ?? 1),
            limit: Number(req.query.limit ?? 10),
            search: req.query.search as string | undefined,
        }

        const users = await this.service.listCharacters(queryParams);
        return this.ReturnSuccess(res, users);
    }

    public async createCharacter(req: Request, res: Response) {
        new CreateCharacterValidator().check(req);
        
        const userId = (req as any).user.userId;
       
        const characterData = new CreateCharacterDto(req.body.name, req.body.surname, req.body.background, userId, req.body.campaignId);
        await this.service.createCharacter(characterData);
        return this.ReturnCreatedWithoutData(res);
    }

    public async updateCharacter(req: Request, res: Response) {
        new UpdateCharacterValidator().check(req);
        
        const userId = (req as any).user.userId;
        const characterId = req.params.id as string;

        const { name, surname, background } = req.body;
        const updateData = {
            ...(name && { name }),
            ...(surname && { surname }),
            ...(background && { background }),
        };

        await this.service.updateCharacter(userId, characterId, updateData);
        return this.ReturnSuccessWithoutData(res);
    }
}