import { useState } from "react";
import PostCard from "./PostCard";

const PostContainer = () => {

    const postContent = [
        {
            id:1,
            Description : "Hii there, Im the First Post"
        },
        {
            id:2,
            Description : "Hii there, Im the Second Post"
        }

    ]

    const [post , setPost] = useState
    ([]);

    return(
        <>
            <div className="Content-container">
                {postContent.map((res) => {
                   return <PostCard key={res.id} Details={res} />
                })}
            </div>
        </>
    )
}

export default PostContainer;