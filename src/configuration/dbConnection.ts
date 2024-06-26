import mongoose from "mongoose";
import { congif } from "../constant";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(congif.MONGO_DB_URI, {
            dbName: "node_TS",
        });
        return connect;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;
