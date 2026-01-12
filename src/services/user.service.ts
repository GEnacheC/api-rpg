import UserDto from "../models/dtos/user.dto";
import UserRepository from "../repositories/user.repository";

export default class UserService {
    public static async createUser(userData: UserDto) {
        await UserRepository.createUser(userData);
    }
}