import UserModel from "../models/user-model.js";
import bcrypt from "bcrypt"

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
        await newUser.save()
        res.status(200).json(newUser)
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

            validity ? res.status(200).send(user) : res.status(400).json("Email ou Senha incorretos")
        }
        else {
            res.status(404).json("Email não cadastrado")
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}