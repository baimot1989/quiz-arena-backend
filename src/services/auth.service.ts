// ==================================================
// File: auth.service.ts
// Purpose: Authentication business logic
// ==================================================

import bcrypt from "bcrypt";

import { createUser, findUserByEmail } from "../repositories/user.repository";

import { generateToken } from "../utils/jwt";


// Register new user
export const registerUser = async (
    username: string,
    email: string,
    password: string
) => {


    // Check if user already exists
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        throw new Error( "Email already exists" );
    }

    // Hash user password before saving
    const passwordHash = await bcrypt.hash( password, 10 );

    // Create new user in database
    const user = await createUser({ username, email, passwordHash });

    // Generate authentication token
    const token = generateToken(
        user._id.toString()
    );

    // Return user data and JWT token
    return { user, token };

};