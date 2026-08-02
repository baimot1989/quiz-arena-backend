// ==================================================
// File: express.d.ts
// Purpose: Extend Express Request interface
// ==================================================

declare namespace Express {

    interface Request {

        user?: { userId: string };

    }

}