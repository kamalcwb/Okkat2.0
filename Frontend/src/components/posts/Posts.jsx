import React from 'react'
import styles from './Posts.module.css'
import Post from '../post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTimelinePosts } from '../../actions/postAction.js'
import { useParams } from "react-router-dom";

const Posts = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const { user } = useSelector((state) => state.authReducer.authData)
    let { posts, loading } = useSelector((state) => state.postReducer)
    useEffect(() => {
        dispatch(getTimelinePosts(user._id));
    }, []);
    if (!posts) return 'Não tem posts ainda';
    if (params.id) posts = posts.filter((post) => post.userId === params.id)
    return (
        <div className={styles.posts}>
            {loading
                ? "Carregando posts...."
                : posts.map((post, id) => {
                    return <Post data={post} key={id} />;
                })}
        </div>
    )
}

export default Posts
