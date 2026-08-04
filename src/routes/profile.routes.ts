// ==================================================
// File: profile.routes.ts
// Purpose: Profile API routes
// ==================================================

import { Router } from "express";

import { getMyProfile, updatePreferences } from "../controllers/profile.controller";

import { authMiddleware } from "../middleware/auth.middleware";


// Create router instance
const router = Router();


// Get current user's profile
router.get( "/me", authMiddleware, getMyProfile );

// Update current user preferences
router.patch( "/me/preferences", authMiddleware, updatePreferences );

// Export profile routes
export default router;