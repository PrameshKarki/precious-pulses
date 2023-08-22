import z from "zod";
import prisma from "../lib/prisma";
import { trpc } from "../lib/trpc";

export const pulseRouter=trpc.router({
    getPulses:trpc.procedure.query(async()=>{
        const pulses=await prisma.pulse.findMany()
        console.log("🚀 ~ file: pulseRouter.ts:7 ~ getPulses:trpc.procedure.query ~ pulses:", pulses)
        return "Hello World!"
    }),
    createPulse:trpc.procedure.input(z.object({
        title:z.string(),
    })).mutation(async(data)=>{
       console.log(data);
       return true; 
    })
})