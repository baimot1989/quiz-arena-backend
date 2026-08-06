// ==================================================
// File: game.repository.ts
// Purpose: Handle database operations for Game model
// Description:
// Provides an abstraction layer between the service
// layer and MongoDB.
// ==================================================

import Game from "../models/game";
import { IGame } from "../models/game";


// ==================================================
// Game Repository Class
// ==================================================

class GameRepository {


    // ==================================================
    // Create new game
    // ==================================================

    async createGame(gameData: Partial<IGame>) {

        const game = await Game.create(
            gameData
        );

        return game;
    }



    // ==================================================
    // Find game by ID
    // ==================================================

    async findById(gameId: string) {

        const game = await Game.findById(
            gameId
        );

        return game;
    }



    // ==================================================
    // Update existing game
    // ==================================================

    async updateGame(
        gameId: string,
        updateData: Partial<IGame>
    ) {

        const game = await Game.findByIdAndUpdate(
            gameId,
            updateData,
            {
                new: true
            }
        );

        return game;
    }



    // ==================================================
    // Finish game
    // Purpose:
    // Update game status and completion time
    // ==================================================

    async finishGame(gameId: string) {

        const game = await Game.findByIdAndUpdate(
            gameId,
            {
                status: "finished",
                finishedAt: new Date()
            },
            {
                new: true
            }
        );

        return game;
    }

}


// Export singleton instance

export default new GameRepository();