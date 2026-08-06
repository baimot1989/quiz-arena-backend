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

// ==================================================
// Select random questions from a given list
// Purpose:
// Returns a specific amount of random questions
// ==================================================

export const getRandomQuestions = (questions: any[], amount: number) => {


    const shuffledQuestions = [...questions].sort(

        () => Math.random() - 0.5
    );


    return shuffledQuestions.slice(
        0,
        amount
    );

};

// ==================================================
// Convert Question document into Game snapshot format
//
// Purpose:
// Creates a copy of the question data that will be stored
// inside a game session.
//
// The snapshot keeps the question unchanged even if the
// original question is updated later.
// ==================================================

export const mapQuestionToGameQuestion = (question: any) => {

    return {

        questionId: question._id,

        questionText: question.questionText,

        answers: question.answers,

        correctAnswer: question.correctAnswer,

        explanation: question.explanation,

        category: question.category,

        difficulty: question.difficulty

    };

};

// ==================================================
// Get questions for a game session
// Purpose:
// Creates the default Quiz Arena question set
//
// Rules:
// - 4 easy questions
// - 4 medium questions
// - 2 hard questions
//
// Returns:
// A mixed array of 10 questions
// ==================================================

export const getGameQuestions = async () => {


    const easyQuestions =
        await findQuestionsByDifficulty(
            "easy"
        );


    const mediumQuestions =
        await findQuestionsByDifficulty(
            "medium"
        );


    const hardQuestions =
        await findQuestionsByDifficulty(
            "hard"
        );



    const selectedEasy =
        getRandomQuestions(
            easyQuestions,
            4
        );


    const selectedMedium =
        getRandomQuestions(
            mediumQuestions,
            4
        );


    const selectedHard =
        getRandomQuestions(
            hardQuestions,
            2
        );



    const gameQuestions = [

        ...selectedEasy,
        ...selectedMedium,
        ...selectedHard

    ];



    return gameQuestions
        .sort(
            () => Math.random() - 0.5
        )
        .map(
            mapQuestionToGameQuestion
        );

};