// ==================================================
// File: question.controller.ts
// Purpose: Handle question HTTP requests
// ==================================================

import { Request, Response } from "express";

import {
    QuestionIdParams,
    QuestionCategoryParams,
    QuestionDifficultyParams
} from "../types/route.types";

import {
    createQuestion,
    getAllQuestions,
    getQuestionById,
    getQuestionsByCategory,
    getQuestionsByDifficulty
} from "../services/question.service";


// Get all questions
export const getQuestions = async (req: Request, res: Response) => {

    try {

        const questions = await getAllQuestions();

        res.status(200).json({

            questions

        });

    } catch (error) {

        res.status(500).json({

            message:
                "Failed to get questions"

        });

    }

};

// Get question by id
export const getQuestion = async (req: Request<QuestionIdParams>, res: Response) => {

    try {

        const question = await getQuestionById(req.params.id);

        res.status(200).json({

            question

        });

    } catch (error) {

        res.status(404).json({

            message:
                error instanceof Error
                    ? error.message
                    : "Question not found"

        });

    }

};



// Get questions by category
export const getByCategory = async (req: Request<QuestionCategoryParams>, res: Response) => {

    try {

        const questions = await getQuestionsByCategory(req.params.category);

        res.status(200).json({

            questions

        });


    } catch (error) {

        res.status(500).json({

            message:
                "Failed to get questions"

        });

    }

};

// Get questions by difficulty
export const getByDifficulty = async (req: Request<QuestionDifficultyParams>, res: Response) => {

    try {

        const questions = await getQuestionsByDifficulty(req.params.difficulty);

        res.status(200).json({

            questions

        });


    } catch (error) {

        res.status(500).json({

            message:
                "Failed to get questions"

        });

    }

};

// Create new question
export const createQuestionController = async ( req: Request, res: Response ) => {

    try {

        const question = await createQuestion( req.body );

        res.status(201).json({ question });

    } catch (error) {

        res.status(500).json({ message: "Failed to create question" });

    }

};