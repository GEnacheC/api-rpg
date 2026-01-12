import { type Response } from 'express';
import ProtocolService from '../services/protocol.service.js';


export default class ProtocolController {
    public static async createProtocol(res: Response) {
        const protocol = await ProtocolService.createProtocol();

        // try/catch?
        res.status(201).json({ message: "Protocol created successfully!" });
    }
}