import BaseRepository from "../common/repository/baseRepository.repository";
import CreateUserDto from "../models/dtos/user.dto";

export default class UserRepository extends BaseRepository {
    public async createUser(userData: CreateUserDto) {
        const user = await this.epc().user.create({
            data: {
                username: userData.getUsername(),
                password: userData.getPassword(),
                protocolId: userData.getProtocol()
            }
        });
        return user;
    }

    public async getUserByUsername(username: string) {
        const user = await this.epc().user.findFirst({
            where: {
                username: username
            }
        })
        return user;
    }
}