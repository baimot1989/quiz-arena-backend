// ==================================================
// File: question.routes.ts
// Purpose: Question API routes
// ==================================================

import { Router } from "express";

import {
    createQuestionController,
    getQuestions,
    getQuestion,
    getByCategory,
    getByDifficulty
} from "../controllers/question.controller";

// Create router instance
const router = Router();

// Create new question
router.post( "/", createQuestionController );

// Get all questions
router.get("/", getQuestions);

// Get questions by category
router.get("/category/:category", getByCategory);

// Get questions by difficulty
router.get("/difficulty/:difficulty", getByDifficulty);

// Get question by id
router.get("/:id", getQuestion);



// Export router
export default router;