import { type Request, type Response } from 'express';
import CreateAttributeDto from '../models/dtos/attribute.dto';
import AttributeService from '../services/attribute.service';

export default class AttributeController {
    public static async createAttribute(req: Request, res: Response) {
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is missing' });
        }
        const errors = []
        if (!req.body.name) errors.push('Name is required');
        if (!req.body.description) errors.push('Description is required');

        if (errors.length > 0) {
            return res.status(400).json({ errors: errors });
        }

        const attributeData = new CreateAttributeDto(req.body.name, req.body.description);
        await AttributeService.createAttribute(attributeData);
        return res.status(201).json({ message: 'Attribute created successfully' });
    }   
}