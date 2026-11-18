import { Router } from "express";
import { AuthController } from "../controller/auth.controller.js";


const router = Router();

const authController =
  new AuthController();



export {router as authRoutes};