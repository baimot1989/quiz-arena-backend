// ==================================================
// File: game.routes.ts
// Purpose: Define routes for Game module
// ==================================================

import { Router } from "express";

import { createGameController, getGameController } from "../controllers/game.controller";

const router = Router();

// ==================================================
// Create new game
// POST /api/games
// ==================================================

router.post( "/", createGameController );

// ==================================================
// Get game by id
// GET /api/games/:id
// ==================================================

router.get( "/:id", getGameController );

export default router;