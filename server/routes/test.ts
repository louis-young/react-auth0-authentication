import { Router } from "express";
import { testController } from "../controllers/test";

export const testRouter = Router();

testRouter.get("/", testController.getTest);
