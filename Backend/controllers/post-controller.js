import PostModel from "../models/post-model.js";
import mongoose from "mongoose";

export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body)

    try {
        await newPost.save()
        res.status(200).json("Post criado")
    }
    catch (error) {
        return res.status(500).json(error)
    }
}

export const getPost = async (req, res) => {
    const id = req.params.id

    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)

    }
    catch (error) {
        res.status(500).json(error)
    }
}

export const updatePost = async (req, res) => {
    const postId = req.params.id
    const { userId } = req.body
    try {
        const post = await PostModel.findById(postId)
        if (post.userId === userId) {
            await post.updateOne({ $set: req.body })
            res.status(200).json("Post atualizado")
        } else {
            res.status(403).json("Não permitido")
        }
    }
    catch (error) {
        res.status(500).json(error)
    }
}

export const deletePost = async (req, res) => {
    const id = req.params.id
    const { userId } = req.body

    try {
        const post = await PostModel.findById(id)
        if (post.userId === userId) {
            await post.deleteOne()
            res.status(200).json("Post deletado")
        } else {
            res.status(403).json("Não permitido")
        }

    }
    catch (error) {
        res.status(500).json(error)
    }
}

export const likePost = async (req, res) => {
    const id = req.params.id
    const { userId } = req.body

    try {
        const post = await PostModel.findById(id)
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } })
            res.status(200).json("Post curtido")
        } else {
            await post.updateOne({ $pull: { likes: userId } })
            res.status(200).json("Post descurtido")
        }

    }
    catch (error) {
        res.status(500).json(error)
    }
}

export const getTimeLinePosts = async (req, res) => {
    const userId = req.params.id


}