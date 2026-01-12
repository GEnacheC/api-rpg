import { type Response } from 'express';
import ProtocolService from '../services/protocol.service';


export default class ProtocolController {
    public static async createProtocol(res: Response) {
        await ProtocolService.createProtocol();

        // try/catch?
        res.status(201).json({ message: "Protocol created successfully!" });
    }
}