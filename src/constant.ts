import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

const _config: {
    Port: string;
    MONGO_DB_URI: string;
} = {
    Port: process.env.PORT || "5000",
    MONGO_DB_URI: process.env.MONGO_DB_URI || "",
};

export const congif = Object.freeze(_config);
