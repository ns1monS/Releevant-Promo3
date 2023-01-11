import express from 'express'
import dotenv from 'dotenv'
import logger from 'morgan'
import userRouter from './routes/user.js'
import accountRouter from './routes/account.js'
import authRouter from './routes/auth.js'


dotenv.config()

const PORT = process.env.PORT;
const expressApp = express()

expressApp.use(express.json())
expressApp.use(express.text())
expressApp.use(logger('dev'))
expressApp.use('/account', accountRouter)
expressApp.use('/auth', authRouter)
expressApp.use('/user',userRouter)


expressApp.listen(PORT, () => console.log(`Server in port ${PORT}`));