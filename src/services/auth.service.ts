// ==================================================
// File: auth.service.ts
// Purpose: Authentication business logic
// ==================================================

import bcrypt from "bcrypt";

import { createUser, findUserByEmail } from "../repositories/user.repository";

import { generateToken } from "../utils/jwt";
import { RegisterUserDto, LoginUserDto } from "../dto/user.dto";


// Register new user
export const registerUser = async (
    userData: RegisterUserDto
) => {

    const {
        username,
        email,
        password
    } = userData;

    // Check if user already exists
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        throw new Error("Email already exists");
    }

    // Hash user password before saving
    const passwordHash = await bcrypt.hash(password, 10);

    // Create new user in database
    const user = await createUser({ username, email, passwordHash });

    // Generate authentication token
    const token = generateToken(
        user._id.toString()
    );

    // Return user data and JWT token
    return { user, token };

};

// Login existing user
export const loginUser = async (
    userData: LoginUserDto
) => {

    const { email, password } = userData;

    // Find user by email
    const user = await findUserByEmail(email);

    if (!user) {
        throw new Error("Invalid credentials");
    }

    // Compare entered password with stored hash
    const isPasswordValid = await bcrypt.compare(
        password,
        user.passwordHash
    );

    if (!isPasswordValid) {
        throw new Error("Invalid credentials");
    }

    // Generate authentication token
    const token = generateToken( user._id.toString() );

    // Return user data and JWT token
    return {
        user,
        token
    };

};