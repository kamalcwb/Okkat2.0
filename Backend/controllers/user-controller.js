import UserModel from "../models/user-model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const getAllUser = async (req, res) => {
    try {
        let users = await UserModel.find()
        users = users.map((user) => {
            const { password, ...other } = user._doc
            return other
        })
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export const getUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await UserModel.findById(id)
        if (user) {
            const { password, ...other } = user._doc
            res.status(200).json(other)
        }
        else {
            res.status(404).json("Usuario não encontrado")
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const updateUser = async (req, res) => {
    const id = req.params.id
    const { _id, currentUserAdminStatus, password } = req.body

    if (id === _id) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(password, salt)
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
            const token = jwt.sign({
                email: user.email,
                username: user.username,
                id: user._id
            }, process.env.JWT_KEY, { expiresIn: '6h' }
            )

            res.status(200).json({ user, token })
        }
        catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("Acesso não permitido")
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id
    const { _id, currentUserAdminStatus } = req.body
    if (_id === id || currentUserAdminStatus) {
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("Usuario deletado com sucesso")
        }
        catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("Acesso não permitido")
    }
}

export const followUser = async (req, res) => {
    const id = req.params.id
    const { _id } = req.body

    if (_id === id) {
        res.status(403).json("Ação não permitida")
    }
    else {
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(_id)

            if (!followUser.followers.includes(_id)) {
                await followUser.updateOne({ $push: { followers: _id } })
                await followingUser.updateOne({ $push: { following: id } })
                res.status(200).json("Usuario seguido")
            }
            else {
                res.status(403).json("Já está seguindo este usuário")
            }
        }
        catch (error) {
            res.status(500).json(error)
        }
    }
}

export const unfollowUser = async (req, res) => {
    const id = req.params.id
    const { _id } = req.body

    if (_id === id) {
        res.status(403).json("Ação não permitida")
    }
    else {
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(_id)

            if (followUser.followers.includes(_id)) {
                await followUser.updateOne({ $pull: { followers: _id } })
                await followingUser.updateOne({ $pull: { following: id } })
                res.status(200).json("Não está mais seguindo este usuário")
            }
            else {
                res.status(403).json("Não está seguindo este usuário")
            }
        }
        catch (error) {
            res.status(500).json(error)
        }
    }
}