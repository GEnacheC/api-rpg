import prisma from "../database/prisma.js";

export default class ProtocolRepository {
    public static async createProtocol() {
        const p = await prisma.protocol.create({});
        return p;
    };
};