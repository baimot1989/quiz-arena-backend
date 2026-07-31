// ==================================================
// File: user.ts
// Purpose: User MongoDB model
// ==================================================

import mongoose, { Schema, Document } from "mongoose";

// User document interface
export interface IUser extends Document {

    username: string;

    email: string;

    passwordHash: string;

    createdAt: Date;

    updatedAt: Date;

}

// User schema definition
const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        passwordHash: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);

// Export User model
export const User = mongoose.model<IUser>(
    "User",
    userSchema
);