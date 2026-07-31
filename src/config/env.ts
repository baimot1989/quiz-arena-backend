// ==================================================
// File: env.ts
// Purpose: Validate and export environment variables
// ==================================================

import dotenv from "dotenv";
import jwt from "jsonwebtoken";


dotenv.config();


// Check required environment variables
const requiredEnvVariables = [
    "MONGO_URI",
    "JWT_SECRET",
    "JWT_EXPIRES_IN"
];


// Validate environment configuration
requiredEnvVariables.forEach((variable) => {

    if (!process.env[variable]) {

        throw new Error(
            `Missing environment variable: ${variable}`
        );

    }

});


// Export application environment variables
export const env = {

    PORT: Number(process.env.PORT) || 5000,

    MONGO_URI: process.env.MONGO_URI as string,

    JWT_SECRET: process.env.JWT_SECRET as string,

    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"]

};