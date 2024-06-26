import app from "./app";
import connectDB from "./configuration/dbConnection";
import { congif } from "./constant";

(async () =>
    connectDB().then((resolve) => {
        try {
            app.listen(congif.Port, () => {
                const { port } = resolve.connection;
                console.log(`db connect at port ${port}`);
                console.log(`server start at Port ${congif.Port}`);
            });
        } catch (_error) {
            process.exit(1);
        }
    }))();
