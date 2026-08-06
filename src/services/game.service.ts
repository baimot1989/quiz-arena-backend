// ==================================================
// File: game.service.ts
// Purpose: Game business logic
// Description:
// Handles game creation and game flow logic.
// ==================================================


import gameRepository from "../repositories/game.repository";

import {
    getGameQuestions
} from "./question.service";

import {
    CreateGameDto
} from "../dto/game.dto";



// ==================================================
// Create new game
//
// Flow:
// 1. Get questions for the game
// 2. Create game snapshot
// 3. Save game in database
// ==================================================

export const createGame = async (
    data: CreateGameDto
) => {


    const questions =
        await getGameQuestions();



    const game =
        await gameRepository.createGame({

            mode: data.mode,

            status: "waiting",

            questions

        });



    return game;

};



// ==================================================
// Get game by id
// ==================================================

export const getGameById = async (
    gameId: string
) => {


    const game =
        await gameRepository.findById(
            gameId
        );


    if (!game) {

        throw new Error(
            "Game not found"
        );

    }


    return game;

};



// ==================================================
// Start game
// ==================================================

export const startGame = async (
    gameId: string
) => {


    const game =
        await gameRepository.updateGame(
            gameId,
            {
                status: "active",
                startedAt: new Date()
            }
        );


    if (!game) {

        throw new Error(
            "Game not found"
        );

    }


    return game;

};



// ==================================================
// Finish game
// ==================================================

export const finishGame = async (
    gameId: string
) => {


    const game =
        await gameRepository.finishGame(
            gameId
        );


    if (!game) {

        throw new Error(
            "Game not found"
        );

    }


    return game;

};