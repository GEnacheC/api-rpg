import { prisma } from "../database/prisma";

export default class ProtocolRepository {
    public static async createProtocol() {
        const protocol = await prisma.protocol.create({});
        return protocol;
    };
};