import { type Request, type Response } from "express";
import CharacterDto from "../models/dtos/character.dto";
import CharacterService from "../services/character.service";

export default class CharacterController {
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

        if (erros.length > 0) {
            return res.status(400).json({ errors: erros });
        }

        const characterData = new CharacterDto(req.body.name, req.body.surname, req.body.background, userId);
        await CharacterService.createCharacter(characterData);
        return res.status(201).json({ message: 'Character created successfully' });
    }
}