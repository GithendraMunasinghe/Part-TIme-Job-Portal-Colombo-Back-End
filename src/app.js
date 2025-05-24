import express from "express";
import cors from 'cors'
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
import resumeRouter from './routes/resumeRoutes.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to Job Portal')
})

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/resume', resumeRouter)

export default app;