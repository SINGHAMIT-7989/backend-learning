import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))   // here public is the name of the folder
app.use(cookieParser())


// routes import 

import userRouter from "./routes/user.routes.js"

// routes  decleartion
app.use("/api/v1/users", userRouter)

export {app}