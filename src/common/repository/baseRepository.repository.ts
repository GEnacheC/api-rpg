import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../../generated/prisma/client";
import { PrismaPromise } from "../../../generated/prisma/internal/prismaNamespace";

class BaseRepository {
    private prismaClient: PrismaClient;
    private operations: PrismaPromise<any>[] = [];

    constructor() {
        const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
        this.prismaClient = new PrismaClient({ adapter });
    }

    protected addOperation(operation: PrismaPromise<any>): void {
        this.operations.push(operation);
    }

    /**
     * epc = ENGINE PRISMA CLIENT
     * @returns prisma client instance
     */
    protected epc(): PrismaClient {
        return this.prismaClient;
    }

    public async commit(): Promise<void> {
        // Executa todas as operações em uma transação
        await this.prismaClient.$transaction(this.operations);
        await this.prismaClient.$disconnect();
        this.operations = [];
    }
}


export default BaseRepository;