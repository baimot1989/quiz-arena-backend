// ==================================================
// File: profile.controller.ts
// Purpose: Handle profile HTTP requests
// ==================================================

import { Request, Response } from "express";

import { getProfile } from "../services/profile.service";


// Get current user profile
export const getMyProfile = async (req: Request, res: Response) => {

    try {

        // Get authenticated user id from JWT middleware
        const userId = req.user?.userId;

        console.log("USER ID:", userId);
        
        if (!userId) {

            return res.status(401).json({

                message: "Unauthorized"

            });

        }


        const profile = await getProfile(userId);


        res.status(200).json({

            profile

        });


    } catch (error) {

        res.status(404).json({

            message:
                error instanceof Error
                    ? error.message
                    : "Profile not found"

        });

    }

};