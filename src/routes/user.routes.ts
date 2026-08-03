// ==================================================
// File: user.routes.ts
// Purpose: User API routes
// ==================================================

import { Router } from "express";

import { getCurrentUser } from "../controllers/user.controller";

import { authMiddleware } from "../middleware/auth.middleware";


// Create router instance
const router = Router();

// Get current authenticated user
router.get( "/me", authMiddleware, getCurrentUser);

// Export user routes
export default router;