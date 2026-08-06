// ==================================================
// File: game.ts
// Purpose: Define Game model and database structure
// Description:
// Stores active and completed Quiz Arena games,
// including players, questions snapshot and answers.
// ==================================================

import mongoose, { Document, Schema } from "mongoose";


// ==================================================
// Player Answer Interface
// Purpose:
// Stores a player's answer for a specific question
// ==================================================

export interface IPlayerAnswer {

    questionId: mongoose.Types.ObjectId;

    selectedAnswer: number;

    isCorrect: boolean;

    // Time taken by player to answer (seconds)
    timeTaken: number;

    // Points before speed bonus
    basePoints: number;

    // Bonus based on answer speed
    speedBonus: number;

    // Final points earned
    pointsEarned: number;
}


// ==================================================
// Game Question Interface
// Purpose:
// Stores a snapshot of the question inside the game.
//
// We store the full question data because:
// - Questions can change in the future
// - Old games must remain unchanged
// ==================================================

export interface IGameQuestion {

    questionId: mongoose.Types.ObjectId;

    questionText: string;

    answers: string[];

    // Correct answer index (A-D)
    correctAnswer: number;

    explanation: string;

    category: string;

    difficulty: "easy" | "medium" | "hard";
}


// ==================================================
// Game Player Interface
// Purpose:
// Represents a player participating in a game
// ==================================================

export interface IGamePlayer {

    // Registered user
    userId?: mongoose.Types.ObjectId;

    // Guest player identifier
    guestId?: string;

    username: string;

    score: number;

    correctAnswers: number;

    wrongAnswers: number;

    answers: IPlayerAnswer[];
}


// ==================================================
// Main Game Interface
// ==================================================

export interface IGame extends Document {

    mode: "single" | "multiplayer";

    status: "waiting" | "active" | "finished";

    categoryPool: string[];

    players: IGamePlayer[];

    questions: IGameQuestion[];

    currentQuestionIndex: number;

    startedAt?: Date;

    finishedAt?: Date;

    createdAt: Date;

    updatedAt: Date;
}


// ==================================================
// Player Answer Schema
// ==================================================

const playerAnswerSchema = new Schema<IPlayerAnswer>(
    {

        questionId: {
            type: Schema.Types.ObjectId,
            required: true
        },

        selectedAnswer: {
            type: Number,
            required: true
        },

        isCorrect: {
            type: Boolean,
            required: true
        },

        timeTaken: {
            type: Number,
            required: true
        },

        basePoints: {
            type: Number,
            required: true
        },

        speedBonus: {
            type: Number,
            required: true
        },

        pointsEarned: {
            type: Number,
            required: true
        }

    },
    {
        _id: false
    }
);


// ==================================================
// Game Question Snapshot Schema
// ==================================================

const gameQuestionSchema = new Schema<IGameQuestion>(
    {

        questionId: {
            type: Schema.Types.ObjectId,
            required: true
        },

        questionText: {
            type: String,
            required: true
        },

        answers: {
            type: [String],
            required: true
        },

        correctAnswer: {
            type: Number,
            required: true
        },

        explanation: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        difficulty: {
            type: String,
            enum: [
                "easy",
                "medium",
                "hard"
            ],
            required: true
        }

    },
    {
        _id: false
    }
);


// ==================================================
// Game Player Schema
// ==================================================

const gamePlayerSchema = new Schema<IGamePlayer>(
    {

        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },

        guestId: {
            type: String
        },

        username: {
            type: String,
            required: true
        },

        score: {
            type: Number,
            default: 0
        },

        correctAnswers: {
            type: Number,
            default: 0
        },

        wrongAnswers: {
            type: Number,
            default: 0
        },

        answers: {
            type: [playerAnswerSchema],
            default: []
        }

    },
    {
        _id: false
    }
);


// ==================================================
// Game Schema
// ==================================================

const gameSchema = new Schema<IGame>(
    {

        mode: {
            type: String,
            enum: [
                "single",
                "multiplayer"
            ],
            required: true
        },


        status: {
            type: String,
            enum: [
                "waiting",
                "active",
                "finished"
            ],
            default: "waiting"
        },


        categoryPool: {
            type: [String],
            default: []
        },


        players: {
            type: [gamePlayerSchema],
            default: []
        },


        questions: {
            type: [gameQuestionSchema],
            default: []
        },


        currentQuestionIndex: {
            type: Number,
            default: 0
        },


        startedAt: {
            type: Date
        },


        finishedAt: {
            type: Date
        }

    },
    {
        timestamps: true
    }
);


// ==================================================
// Export Model
// ==================================================

const Game = mongoose.model<IGame>(
    "Game",
    gameSchema
);


export default Game;