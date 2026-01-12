import ProtocolRepository from "../repositories/protocol.repository";

export default class ProtocolService {
    public static async createProtocol() {
        const protocol = await ProtocolRepository.createProtocol();
        return protocol;
    }
}