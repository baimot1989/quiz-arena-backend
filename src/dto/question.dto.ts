// ==================================================
// File: question.dto.ts
// Purpose: Question request validation
// ==================================================


import { z } from "zod";


// Create question validation schema
export const createQuestionSchema = z.object({

    questionText: z
        .string()
        .min(5)
        .max(500),


    category: z
        .string()
        .min(2)
        .max(50),


    difficulty: z.enum([
        "easy",
        "medium",
        "hard"
    ]),


    answers: z
        .array(z.string())
        .length(4),


    correctAnswer: z
        .number()
        .min(0)
        .max(3),


    explanation: z
        .string()
        .max(1000)
        .optional()

});


// TypeScript type from schema
export type CreateQuestionDto =
    z.infer<typeof createQuestionSchema>;