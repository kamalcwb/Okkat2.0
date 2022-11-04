import UserModel from "../models/user-model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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
    const { currentUserId, currentUserAdminStatus } = req.body
    if (currentUserId === id || currentUserAdminStatus) {
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
    const { currentUserId } = req.body

    if (currentUserId === id) {
        res.status(403).json("Ação não permitida")
    }
    else {
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(currentUserId)

            if (!followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({ $push: { followers: currentUserId } })
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
    const { currentUserId } = req.body

    if (currentUserId === id) {
        res.status(403).json("Ação não permitida")
    }
    else {
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(currentUserId)

            if (followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({ $pull: { followers: currentUserId } })
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