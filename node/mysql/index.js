import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user_router.js";

// instanciamos express
const app = express();

// Añadimos el método config de dotenv para utilizar las variables de entorno
dotenv.config();

// --- middlewares de express ---
app.use(express.json());
app.use(express.text());
app.use(logger("dev"));
app.use(cookieParser());

// --- api middlewares ---
app.use("/user", userRouter);

export default app;
