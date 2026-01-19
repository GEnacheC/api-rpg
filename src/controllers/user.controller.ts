import { type Request, type Response } from 'express';
import CreateUserDto from '../models/dtos/user.dto';
import UserService from '../services/user.service';

export default class UserController {
    public static async createUser(req: Request, res: Response) {
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is missing' });
        }
        const errors = []
        if (!req.body.username) errors.push('Username is required');
        if (!req.body.password) errors.push('Password is required');
        if (!req.headers['protocol']) errors.push('Protocol is required');

        if (errors.length > 0) {
            return res.status(400).json({ errors: errors });
        }

        const userData = new CreateUserDto(req.body.username, req.body.password, req.headers['protocol'] as string);
        await UserService.createUser(userData);
        return res.status(201).json({ message: 'User created successfully' });
    }

    public static async loginUser(req: Request, res: Response) {
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is missing' });
        }
        const errors = []
        if (!req.body.username) errors.push('Username is required');
        if (!req.body.password) errors.push('Password is required');

        if (errors.length > 0) {
            return res.status(400).json({ errors: errors });
        }

        try {
            const token = await UserService.loginUser(req.body.username, req.body.password as string);
            return res.status(200).json({ token: token });
        } catch (error) {
            return res.status(401).json({ error: (error as Error).message });
        }
    }
}