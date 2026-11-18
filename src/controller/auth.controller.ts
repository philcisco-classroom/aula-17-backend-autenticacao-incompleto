import { Request, Response } from "express";
import { AuthService } from "../services/auth.service.js";

const authService = new AuthService();

export class AuthController{

    async create(req: Request,res: Response)
    {
        

        
    }


    async login(req: Request,res: Response)
    {

    }

    async logout(req: Request,res: Response)
    {

    }

}