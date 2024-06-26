import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

const _config = {
    port: process.env.PORT,
};

export const congif = Object.freeze(_config);
