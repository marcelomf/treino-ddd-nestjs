import { PrismaClient } from '@prisma/client'
export interface PersistenceDb {
    saveDb: (baseDTO: any) => void;
    removeDb: (id: string) => void;
    findByIdDb: (id: string) => Promise<any>;
    findAllDb: () => Promise<any[]>;
    countDb: () => Promise<number>;
}
export class Orm {

    protected prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

}

