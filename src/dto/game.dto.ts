// ==================================================
// File: game.dto.ts
// Purpose: Define Data Transfer Objects for Game module
// Description:
// DTOs used for creating games, submitting answers,
// sending questions and returning game results.
// ==================================================


// ==================================================
// Create Game DTO
// Purpose:
// Request body used to create a new game.
// ==================================================

export interface CreateGameDto {

    mode: "single" | "multiplayer";

}


// ==================================================
// Submit Answer DTO
// Purpose:
// Request body sent when a player answers a question.
// ==================================================

export interface SubmitAnswerDto {

    questionId: string;

    selectedAnswer: number;

    // Time taken to answer (seconds)
    timeTaken: number;

}


// ==================================================
// Game Question DTO
// Purpose:
// Question sent to the client during an active game.
//
// NOTE:
// correctAnswer and explanation are intentionally
// excluded to prevent cheating.
// ==================================================

export interface GameQuestionDto {

    questionId: string;

    questionText: string;

    answers: string[];

    category: string;

    difficulty: "easy" | "medium" | "hard";

}


// ==================================================
// Game Result DTO
// Purpose:
// Question review returned after the game ends.
// ==================================================

export interface GameResultDto {

    questionId: string;

    questionText: string;

    answers: string[];

    yourAnswer: number;

    correctAnswer: number;

    isCorrect: boolean;

    explanation: string;

    basePoints: number;

    speedBonus: number;

    pointsEarned: number;

}