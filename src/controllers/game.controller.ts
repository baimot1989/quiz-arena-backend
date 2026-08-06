// ==================================================
// File: game.controller.ts
// Purpose: Handle HTTP requests for games
// ==================================================

import { Request, Response } from "express";

import { createGame, getGameById } from "../services/game.service";

import { GameIdParams } from "../types/route.types";

// ==================================================
// Create new game
// ==================================================

export const createGameController = async ( req: Request, res: Response ) => {

    try {

        const game = await createGame( req.body );

        res.status(201).json( game );

    } catch (error) {

        res.status(500).json({ message: "Failed to create game" });

    }

};

// ==================================================
// Get game by id
// ==================================================

export const getGameController = async ( req: Request<GameIdParams>, res: Response) => {

    try {

        const game = await getGameById( req.params.id );

        res.status(200).json( game );

    } catch (error) {

        res.status(404).json({ message: "Game not found" });

    }

};