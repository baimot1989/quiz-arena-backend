import { Request, Response } from "express";


export const getCurrentUser = (
    req: Request,
    res: Response
) => {

    return res.status(200).json({
        message: "Protected route works",
        user: req.user
    });

};