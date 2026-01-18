import { prisma } from "../database/prisma";
import CreateUserDto from "../models/dtos/user.dto";

export default class UserRepository {
    public static async createUser(userData: CreateUserDto) {
        const user = await prisma.user.create({
            data: {
                username: userData.getUsername(),
                password: userData.getPassword(),
                protocolId: userData.getProtocol()
            }
        });
        return user;
    }

    public static async getUserByUsername(username: string) {
        const user = await prisma.user.findFirst({
            where: {
                username: username
            }
        })
        return user;
    }
}