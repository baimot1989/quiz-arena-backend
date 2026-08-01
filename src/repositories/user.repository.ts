// ==================================================
// File: user.repository.ts
// Purpose: Database operations for User entity
// ==================================================

import { User, IUser } from "../models/user";

// Find user by email
export const findUserByEmail = async (
    email: string
): Promise<IUser | null> => {

    return await User.findOne({
        email
    });

};

// Find user by username
export const findUserByUsername = async (
    username: string
): Promise<IUser | null> => {

    return await User.findOne({
        username
    });

};

// Create new user
export const createUser = async (
    userData: Partial<IUser>
): Promise<IUser> => {

    const user = new User(userData);
    return await user.save();

};