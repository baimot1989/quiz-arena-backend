// ==================================================
// File: database.ts
// Purpose: MongoDB connection configuration
// ==================================================

import mongoose from "mongoose";
import { env } from "./env";

// Connect application to MongoDB
export const connectDatabase = async (): Promise<void> => {

    try {

        // Connect using MongoDB URI from environment variables
        await mongoose.connect(
            env.MONGO_URI as string
        );


        console.log(
            "MongoDB connected successfully"
        );


    } catch (error) {

        console.error(
            "MongoDB connection failed:",
            error
        );


        // Stop application when database connection fails
        process.exit(1);

    }

};