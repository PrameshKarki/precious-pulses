import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express, { Application } from "express";
import { appRouter } from "./router";

const app:Application = express();

app.use(cors())

app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to the Precious Pulses API"
    })
})

app.use("/trpc",trpcExpress.createExpressMiddleware({
    router:appRouter,
}))

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});