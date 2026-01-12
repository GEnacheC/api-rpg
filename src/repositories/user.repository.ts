import { prisma } from "../database/prisma";
import UserDto from "../models/dtos/user.dto";

export default class UserRepository {
    public static async createUser(userData: UserDto) {
        const user = await prisma.user.create({
            data: {
                username: userData.getUsername(),
                password: userData.getPassword(),
                protocolId: userData.getProtocol()
            }
        });
        return user;
    }
}