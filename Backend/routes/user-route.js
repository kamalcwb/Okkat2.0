import express from "express"
import { deleteUser, followUser, getUser, unfollowUser, updateUser, getAllUser } from "../controllers/user-controller.js"
import authMiddleware from "../middleware/auth-middleware.js"

const router = express.Router()

router.get('/', getAllUser)
router.get('/:id', getUser)
router.put('/:id', authMiddleware, updateUser)
router.delete('/:id', authMiddleware, deleteUser)
router.put('/:id/follow', authMiddleware, followUser)
router.put('/:id/unfollow', authMiddleware, unfollowUser)

export default router