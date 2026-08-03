// ==================================================
// File: user.service.ts
// Purpose: User business logic
// ==================================================

import { findUserById } from "../repositories/user.repository";


// Get user by id
export const getUserById = async (
    userId: string
) => {

    const user = await findUserById(userId);


    if (!user) {

        throw new Error("User not found");

    }


    // Return only public user information
    return {

        id: user._id,

        username: user.username,

        email: user.email

    };

};