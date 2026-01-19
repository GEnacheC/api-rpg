import { type Request, type Response } from 'express';
import UpdateStatsDto from '../models/dtos/stats.dto';
import StatsService from '../services/stats.service';

export default class StatsController {
    public static async updateCharacterAttributes(req: Request, res: Response) {
        const characterId = req.params.id as string;
        if (!characterId) {
            return res.status(400).json({ error: 'Character ID is required' });
        }
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is missing' });
        }

        const bodyIsValid = req.body.every((item: any) => {
            if (item.idAttribute && typeof item.idAttribute === 'string' &&
                item.value !== undefined && typeof item.value === 'number') {
                return true;
            }
            return false;
        });

        if (!bodyIsValid) {
            return res.status(400).json({ error: 'Invalid request body format' });
        }

        const statsList = req.body.map((item: any) => new UpdateStatsDto(item.idAttribute, item.value));
        await StatsService.updateCharacterStats(characterId, statsList);
        return res.status(200).json({ message: 'Character attributes updated successfully' });
    }
}