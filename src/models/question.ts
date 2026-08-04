// ==================================================
// File: question.ts
// Purpose: Question MongoDB model
// ==================================================

import mongoose, { Schema, Document } from "mongoose";


// Question difficulty levels
export type QuestionDifficulty =
    | "easy"
    | "medium"
    | "hard";


// Question document interface
export interface IQuestion extends Document {

    questionText: string;

    category: string;

    difficulty: QuestionDifficulty;

    answers: string[];

    correctAnswer: number;

    explanation?: string | null;

    createdAt: Date;

    updatedAt: Date;

}


// Question schema definition
const questionSchema = new Schema<IQuestion>(
    {

        questionText: {

            type: String,

            required: true,

            trim: true

        },


        category: {

            type: String,

            required: true,

            trim: true

        },


        difficulty: {

            type: String,

            enum: [
                "easy",
                "medium",
                "hard"
            ],

            required: true

        },


        answers: {

            type: [String],

            required: true,

            validate: {

                validator: function (
                    answers: string[]
                ) {

                    return answers.length === 4;

                },

                message:
                    "A question must contain exactly 4 answers"

            }

        },


        correctAnswer: {

            type: Number,

            required: true,

            min: 0,

            max: 3

        },


        explanation: {

            type: String,

            default: null

        }

    },

    {

        timestamps: true

    }

);


// Export Question model
export const Question = mongoose.model<IQuestion>(
    "Question",
    questionSchema
);