import md5 from "md5";
import jwt from "jsonwebtoken";
import CreateUserDto from "../models/dtos/user.dto";
import UserRepository from "../repositories/user.repository";
import BaseService from "../common/service/baseService.service";

export default class UserService extends BaseService {

    private repository: UserRepository;

    constructor() {
        super();
        this.repository = new UserRepository();
    }

    public async createUser(userData: CreateUserDto) {
        await this.repository.createUser(userData);
    }

    public async loginUser(username: string, password: string) {
        const hashPass = md5(password);
        const user = await this.repository.getUserByUsername(username);
        if (!user || user.password !== hashPass) {
            throw new Error("Invalid username or password");
        }

        const token = jwt.sign(
            { userId: user.id, role: user.admin? 'admin' : 'common' }, 
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );
        
        return token;
    }
}