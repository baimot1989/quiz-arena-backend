// ==================================================
// File: auth.controller.ts
// Purpose: Handle authentication HTTP requests
// ==================================================

import { Request, Response } from "express";

import { registerUser } from "../services/auth.service";


// Register new user controller
export const register = async ( req: Request, res: Response ) => {

    try {
        const { username, email, password } = req.body;
        const { user, token } = await registerUser(username, email, password);

        res.status(201).json({

            message: "User registered successfully",

            user: {

                id: user._id,
                username: user.username,
                email: user.email

            },
            token

        });

    } catch (error) {

        res.status(400).json({

            message:
                error instanceof Error
                    ? error.message
                    : "Registration failed"

        });
    }

};