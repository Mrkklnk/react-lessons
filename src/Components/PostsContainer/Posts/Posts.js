import {useEffect, useState} from "react";

//import {axiosService} from "../../../services/axiosService";
//import {urls} from "../../../constants/urls";
import {Post} from "../Post/Post";
import css from './Posts.module.css'
import {PostDetails} from "../PostDetails/PostDetails";
import {postService} from "../../../services/PostService";

const Posts = () => {

    const [Posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    const click = async (postId) => {
        const {data} = await postService.getById(postId)
        setPostDetails(data)
    }

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div>
            <div className={css.Posts}>
                {Posts.map(post => <Post key={post.id} post={post} click={click}/>)}
            </div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};