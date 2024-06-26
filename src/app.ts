import express, { Express } from "express";
import userRoutes from "./routes/user.route";
// import createHttpError from "http-errors";

import errorHandling from "./middlewares/error.middleware";
const app: Express = express();

// set routes
app.use("/api/user", userRoutes);

// app.get(
//     "/demo",
//     (_request: Request, response: Response, next: NextFunction) => {
//         try {
//             const data: string[] = ["a", "v"];
//             if (data) {
//                 const error = createHttpError(400, "something went wrong");
//                 throw error;
//             }
//             response.json({
//                 message: "working",
//             });
//         } catch (error) {
//             next(error);
//         }
//     }
// );

// Note: global level error handler
app.use(errorHandling);

export default app;
