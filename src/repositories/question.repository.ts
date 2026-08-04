// ==================================================
// File: question.repository.ts
// Purpose: Database operations for Question entity
// ==================================================

import { Question, IQuestion } from "../models/question";


// Create new question
export const createQuestion = async (
    questionData: Partial<IQuestion>
): Promise<IQuestion> => {

    const question = new Question(questionData);

    return await question.save();

};

// Find question by id
export const findQuestionById = async (
    questionId: string
): Promise<IQuestion | null> => {

    return await Question.findById(questionId);

};

// Get all questions
export const findAllQuestions = async ()
: Promise<IQuestion[]> => {

    return await Question.find();

};

// Find questions by category
export const findQuestionsByCategory = async (
    category: string
): Promise<IQuestion[]> => {

    return await Question.find({
        category
    });

};

// Find questions by difficulty
export const findQuestionsByDifficulty = async (
    difficulty: string
): Promise<IQuestion[]> => {

    return await Question.find({
        difficulty
    });

};

// Update question
export const updateQuestion = async (
    questionId: string,
    updateData: Partial<IQuestion>
): Promise<IQuestion | null> => {

    return await Question.findByIdAndUpdate(
        questionId,
        updateData,
        {
            new: true
        }
    );

};

// Delete question
export const deleteQuestion = async (
    questionId: string
): Promise<IQuestion | null> => {

    return await Question.findByIdAndDelete(
        questionId
    );

};