import { type Request, type Response } from "express";
import CreateCharacterDto from "../models/dtos/character.dto";
import CharacterService from "../services/character.service";

export default class CharacterController {
    public static async getCharacters(req: Request, res: Response) {
        const queryParams = {
            page: Number(req.query.page ?? 1),
            limit: Number(req.query.limit ?? 10),
            search: req.query.search as string | undefined,
        }

        if (queryParams.page <= 0 || queryParams.limit <= 0) {
            return res.status(400).json({ error: "Parâmetros inválidos" });
        }

        const users = await CharacterService.listCharacters(queryParams);
        return res.json(users);
    }

    public static async createCharacter(req: Request, res: Response) {
        const userId = (req as any).user.userId;
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is missing' });
        }
        const erros = []
        if (!req.body.name) erros.push('Name is required');
        if (!req.body.surname) erros.push('Surname is required');
        if (!req.body.background) erros.push('Background is required');
        if (!userId) erros.push('User ID is required');
        if (!req.body.campaignId) erros.push('Campaign ID is required');

        if (erros.length > 0) {
            return res.status(400).json({ errors: erros });
        }

        const characterData = new CreateCharacterDto(req.body.name, req.body.surname, req.body.background, userId, req.body.campaignId);
        await CharacterService.createCharacter(characterData);
        return res.status(201).json({ message: 'Character created successfully' });
    }

    public static async updateCharacter(req: Request, res: Response) {
        const userId = (req as any).user.userId;
        const characterId = req.params.id as string;
        if (!characterId) {
            return res.status(400).json({ error: 'Character ID is required' });
        }
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is missing' });
        }

        const { name, surname, background } = req.body;

        if (!name && !surname && !background) {
            return res.status(400).json({ error: 'No valid fields to update' });
        }

        const updateData = {
            ...(name && { name }),
            ...(surname && { surname }),
            ...(background && { background }),
        };

        await CharacterService.updateCharacter(userId, characterId, updateData);
        return res.json({ message: 'Character updated successfully' });
    }
}