import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import AuthRoute from "./routes/auth-route.js"
import UserRoute from "./routes/user-route.js"
import PostRoute from "./routes/post-route.js"

//Routes

const app = express()
app.use(express.json())
app.use(cors())

//Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

dotenv.config()

mongoose.connect(process.env.MONGO_DB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Online na porta ${process.env.PORT}`)))
    .catch((error) => console.log(error))

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)