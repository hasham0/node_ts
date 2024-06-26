import app from "./app";
import { congif } from "./constant";

const startServer = (): void => {
    app.listen(congif.port, () => {
        console.log(`server start at port ${congif.port}`);
    });
};

startServer();
