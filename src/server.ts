// ==================================================
// File: server.ts
// Purpose: Application entry point
// Description: Initializes Express server and middleware
// ==================================================

import express from "express";

// Import CORS middleware
// Allows communication between frontend and backend
import cors from "cors";

// Load environment variables from .env file
import dotenv from "dotenv";

// Import MongoDB connection configuration
import { connectDatabase } from "./config/database";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import profileRoutes from "./routes/profile.routes";
import questionRoutes from "./routes/question.routes";
import gameRoutes from "./routes/game.routes";

// Initialize environment configuration
dotenv.config();

// Create Express application instance
const app = express();

// Enable CORS for frontend communication
app.use(cors());

// Enable JSON request body parsing
app.use(express.json());

// Authentication routes
app.use( "/api/auth", authRoutes );
// User routes
app.use( "/api/users", userRoutes);
// Profile routes
app.use( "/api/profile", profileRoutes);
// Question routes
app.use( "/api/questions", questionRoutes);
// Game routes
app.use( "/api/games", gameRoutes);


// Basic health check route
// Used to verify that the server is running
app.get("/", (req, res) => {

    res.json({
        message: "Quiz Arena API is running"
    });

});

const PORT = process.env.PORT || 5000;

// Start application
const startServer = async () => {

    // Connect to database before starting server
    await connectDatabase();

    app.listen(PORT, () => {
        console.log(
            `Server running on port ${PORT}`
        );
    });
};

startServer();