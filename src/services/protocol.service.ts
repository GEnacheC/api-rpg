import BaseService from "../common/service/baseService.service";
import ProtocolRepository from "../repositories/protocol.repository";

export default class ProtocolService extends BaseService {
    
    private repository: ProtocolRepository;
    
    constructor() {
        super();
        this.repository = new ProtocolRepository();
    }

    public async createProtocol() {
        const protocol = await this.repository.createProtocol();
        return protocol;
    }
}