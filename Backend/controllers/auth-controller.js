import UserModel from "../models/user-model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    const { name, lastName, username, email, password, confirmPass } = req.body

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    const newUser = new UserModel({
        name,
        lastName,
        username,
        email,
        password: hashedPass
    })

    try {
        const hasUser = await UserModel.findOne({ email })
        if (hasUser) {
            return res.status(400).json({ error: "Email já cadastrado" })
        }
        const user = await newUser.save()
        const token = jwt.sign({
            username: user.username,
            id: user._id,
            email: user.email
        }, process.env.JWT_KEY, { expiresIn: '6h' })
        res.status(200).json({ user, token })
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModel.findOne({
            email: email
        })
        if (email) {
            const validity = await bcrypt.compare(password, user.password)

            if (!validity) {
                res.status(400).json({ error: "Verifique seu email e senha" })
            }
            else {
                const token = jwt.sign({
                    username: user.username,
                    id: user._id,
                    email: user.email
                }, process.env.JWT_KEY, { expiresIn: '12h' })
                res.status(200).json({ user, token })
            }
        }
        else {
            res.status(404).json({ error: "Verifique seu email e senha" })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}