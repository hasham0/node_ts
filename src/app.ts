import express, { Express } from "express";
import morgan from "morgan";
const app: Express = express();

app.use(morgan("dev"));

// set routes
// app.use("/api/user",userRoutes);

export default app;
