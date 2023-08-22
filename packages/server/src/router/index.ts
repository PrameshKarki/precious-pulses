import { trpc } from "../lib/trpc";
import { pulseRouter } from "./pulseRouter";

export const appRouter=trpc.router({
    pulse:pulseRouter
})

export type AppRouter=typeof appRouter;