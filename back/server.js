import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import userRouters from "./routers/userRouters.js"
import {connectDB} from "./config/db.js"
import colors from "colors"

dotenv.config()
connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/users', userRouters)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
)