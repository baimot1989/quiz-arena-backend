// ==================================================
// File: auth.routes.ts
// Purpose: Authentication API routes
// ==================================================

import { Router } from "express";

import { register, login } from "../controllers/auth.controller";


// Create router instance
const router = Router();

// Register new user
router.post( "/register", register );

// Login existing user
router.post("/login", login);

// Export auth routes
export default router;