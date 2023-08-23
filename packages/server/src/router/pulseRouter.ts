import { faker } from '@faker-js/faker';
import z from "zod";
import prisma from "../lib/prisma";
import { trpc } from "../lib/trpc";


export const pulseRouter=trpc.router({
    getPulses:trpc.procedure.query(()=>{
        return prisma.pulse.findMany()
    }),
    createPulse:trpc.procedure.mutation(async()=>{
        return prisma.pulse.create({
            data:{
                date:faker.date.recent(),
                description:faker.lorem.sentence(),
                title:faker.lorem.sentence(),
            }
        })
    }),
    deletePulse:trpc.procedure.input(z.object({
        id:z.number()
    })).mutation(async(data)=>{
       return prisma.pulse.delete({
            where:{
                id:data.input.id
            }
        })
    }),
})