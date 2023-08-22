import { PrismaClient } from "@prisma/client";

class  Prisma{
    static instance: PrismaClient;
    static getInstance(): PrismaClient {
        if (!Prisma.instance) {
            Prisma.instance = new PrismaClient();
        }
        return Prisma.instance;
    }
}

export default Prisma.getInstance();