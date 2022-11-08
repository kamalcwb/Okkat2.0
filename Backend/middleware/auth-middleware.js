import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const key = process.env.JWT_KEY

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split('')[1]
        if (token) {
            const decoded = jwt.verify(token, key)
            req.body._id = decoded?.id
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Não Autorizado!"
        })
    }
}

export default authMiddleware

