// ==================================================
// File: question.service.ts
// Purpose: Question business logic
// ==================================================

import {
    createQuestion as createQuestionRepository,
    findQuestionById,
    findAllQuestions,
    findQuestionsByCategory,
    findQuestionsByDifficulty,
    updateQuestion as updateQuestionRepository,
    deleteQuestion as deleteQuestionRepository
} from "../repositories/question.repository";

import { CreateQuestionDto } from "../dto/question.dto";


// Create new question
export const createQuestion = async (
    data: CreateQuestionDto
) => {

    const question =
        await createQuestionRepository(data);

    return question;

};


// Get question by id
export const getQuestionById = async (
    questionId: string
) => {

    const question =
        await findQuestionById(questionId);


    if (!question) {

        throw new Error(
            "Question not found"
        );

    }


    return question;

};


// Get all questions
export const getAllQuestions = async () => {

    return await findAllQuestions();

};


// Get questions by category
export const getQuestionsByCategory = async (
    category: string
) => {

    return await findQuestionsByCategory(
        category
    );

};


// Get questions by difficulty
export const getQuestionsByDifficulty = async (
    difficulty: string
) => {

    return await findQuestionsByDifficulty(
        difficulty
    );

};


// Update question
export const updateQuestion = async (
    questionId: string,
    data: Partial<CreateQuestionDto>
) => {

    const question =
        await updateQuestionRepository(
            questionId,
            data
        );


    if (!question) {

        throw new Error(
            "Question not found"
        );

    }


    return question;

};


// Delete question
export const deleteQuestion = async (
    questionId: string
) => {

    const question =
        await deleteQuestionRepository(
            questionId
        );


    if (!question) {

        throw new Error(
            "Question not found"
        );

    }


    return question;

};