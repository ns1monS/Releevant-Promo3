// Creamos el archivo index.js en la raíz del directorio y añadimos el siguiente código:

// importamos el módulo express
import express from "express";

// importamos dotenv
import dotenv from "dotenv";

import logger from "morgan";

// importamos accountRouter
import accountRouter from "./routes/account.js";

// importamos authRouter
import authRouter from "./routes/auth.js";

import userRouter from "./routes/user.js";

import authSessionRouter from "./routes/auth_session.js";

import authTokenRouter from "./routes/auth_token.js";

import validateLoginDto from "./dto/validate_login_dto.js";
// importamos cookie-parser

import cookieParser from "cookie-parser";
import { SignJWT } from "jose";

// Añadimos el método config de dotenv
dotenv.config();

const PORT = process.env.PORT;
const expressApp = express();
expressApp.use(cookieParser());

// middlewares para interpretar el formato json y text enviados desde el cliente por http
expressApp.use(express.json());
expressApp.use(express.text());
expressApp.use(logger("dev"));
// middleawuer para inetrpretar el formato json y text enviados desde el cliente por http

expressApp.use("/account", accountRouter);
expressApp.use("/user", userRouter);

// midleware que hemos importado el router authRouter
expressApp.use("/auth", authRouter);

// middleware para authSessionRouter
expressApp.use("/auth-session", authSessionRouter);

expressApp.use("/profile", authSessionRouter);

expressApp.use("/auth-token", authTokenRouter);

expressApp.use("/profile", authTokenRouter);

// Lo añadimos junto a los demás middleware

expressApp.listen(PORT, () => {
  console.log(`Server in port ${PORT}`);
});
