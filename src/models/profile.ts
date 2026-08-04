// ==================================================
// File: profile.ts
// Purpose: Profile MongoDB model
// ==================================================

import mongoose, { Schema, Document } from "mongoose";

// Profile statistics interface
export interface IProfileStatistics {

    gamesPlayed: number;

    gamesWon: number;

    gamesLost: number;

    totalScore: number;

    correctAnswers: number;

    averageScore: number;

}

// Profile document interface
export interface IProfile extends Document {

    userId: mongoose.Types.ObjectId;

    avatar?: string | null;

    rating: number;

    favoriteCategories: string[];

    statistics: IProfileStatistics;

    achievements: string[];

    createdAt: Date;

    updatedAt: Date;

}


// Profile schema definition
const profileSchema = new Schema<IProfile>(
    {

        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        avatar: {
            type: String,
            default: null
        },

        favoriteCategories: {

            type: [String],

            default: []

        },

        rating: {
            type: Number,
            default: 1000
        },

        statistics: {

            gamesPlayed: {
                type: Number,
                default: 0
            },

            gamesWon: {
                type: Number,
                default: 0
            },

            gamesLost: {
                type: Number,
                default: 0
            },

            totalScore: {
                type: Number,
                default: 0
            },

            correctAnswers: {
                type: Number,
                default: 0
            },

            averageScore: {
                type: Number,
                default: 0
            }

        },

        achievements: {

            type: [String],

            default: []

        }

    },

    {
        timestamps: true
    }

);

// Export Profile model
export const Profile = mongoose.model<IProfile>("Profile", profileSchema);