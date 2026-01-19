import BaseRepository from "../common/repository/baseRepository.repository";
import { prisma } from "../database/prisma";

export default class ProtocolRepository extends BaseRepository{
    constructor() {
        super();
    }

    public async createProtocol() {
        const protocol = await this.epc().protocol.create({});
        return protocol;
    };
};