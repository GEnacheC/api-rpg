import { type Request, type Response } from 'express';
import CreateUserDto from '../models/dtos/user.dto';
import UserService from '../services/user.service';
import CreateUserValidator from '../validators/user/createUserValidator.validator';
import BaseController from '../common/controller/baseController.controller';
import SigninUserValidator from '../validators/user/siginUserValidator.validator';

export default class UserController extends BaseController{
    
    private service: UserService;

    constructor() {
        super();
        this.service = new UserService();
    }

    public async createUser(req: Request, res: Response) {
        new CreateUserValidator().check(req);

        const userData = new CreateUserDto(req.body.username, req.body.password, req.headers['protocol'] as string);
        await this.service.createUser(userData);
        return this.ReturnCreatedWithoutData(res);
    }

    public async loginUser(req: Request, res: Response) {
        new SigninUserValidator().check(req);

        try {
            const token = await this.service.loginUser(req.body.username, req.body.password as string);
            return this.ReturnSuccessToken(res, token);
        } catch (error) {
            return this.ReturnUnauthorized(res);
        }
    }
}