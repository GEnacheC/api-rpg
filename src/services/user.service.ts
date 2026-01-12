import md5 from "md5";
import jwt from "jsonwebtoken";
import UserDto from "../models/dtos/user.dto";
import UserRepository from "../repositories/user.repository";

export default class UserService {
    public static async createUser(userData: UserDto) {
        await UserRepository.createUser(userData);
    }

    public static async loginUser(username: string, password: string) {
        const hashPass = md5(password);
        const user = await UserRepository.getUserByUsername(username);
        if (!user || user.password !== hashPass) {
            throw new Error("Invalid username or password");
        }

        const token = jwt.sign(
            { username }, 
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );
        return token;
    }
}