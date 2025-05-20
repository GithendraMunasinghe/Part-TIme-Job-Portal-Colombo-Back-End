import express from "express";
import cors from 'cors'
import userRouter from './routes/userRoutes.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to Job Portal')
})

app.use('/api/user', userRouter)

export default app;