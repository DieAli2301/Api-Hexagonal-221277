import express from "express";

import { userController } from "./dependencies";

const userRouter = express.Router();

userRouter.get("/find", userController.run.bind(userController));

export { userRouter };
