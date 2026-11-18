import jwt from "jsonwebtoken";
import { Request, Response,NextFunction } from "express";
import { AuthPayload } from "../tipos/auth-payload.js";


export function authMiddleware(req:Request, res:Response, next: NextFunction)
{
  
}