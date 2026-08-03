// ==================================================
// File: user.controller.ts
// Purpose: Handle user HTTP requests
// ==================================================

import { Request, Response } from "express";

import { getUserById } from "../services/user.service";

// Get current authenticated user
export const getCurrentUser = async ( req: Request, res: Response ) => {

    try {

        // Get authenticated user id from JWT middleware
        const userId = req.user?.userId;

        if (!userId) {

            return res.status(401).json({

                message: "Unauthorized"

            });

        }

        const user = await getUserById(userId);

        return res.status(200).json({

            user

        });


    } catch (error) {

        return res.status(404).json({

            message:
                error instanceof Error
                    ? error.message
                    : "User not found"

        });

    }

};