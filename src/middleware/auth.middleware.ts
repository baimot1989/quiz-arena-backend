// ==================================================
// File: auth.middleware.ts
// Purpose: Protect routes using JWT authentication
// ==================================================

import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

// Authenticate user using JWT
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    try {
        // Get authorization header
        const authHeader = req.headers.authorization;

        // Check if token exists
        if (!authHeader) {

            return res.status(401).json({

                message: "Unauthorized"

            });

        }

        // Extract token from: Bearer TOKEN
        const parts = authHeader.split(" ");

        const scheme = parts[0];
        const token = parts[1];


        if (
            scheme !== "Bearer" ||
            !token ||
            parts.length !== 2
        ) {

            return res.status(401).json({

                message: "Unauthorized"

            });

        }

        // Verify JWT token
        const decoded = verifyToken(token) as {
            userId: string;
        };


        // Attach decoded user data to request
        req.user = decoded;


        // Continue to controller
        next();


    } catch (error) {

        return res.status(401).json({

            message: "Unauthorized"

        });

    }

};