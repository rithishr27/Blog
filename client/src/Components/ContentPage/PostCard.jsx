import './PostCard.css';

const PostCard = ({Details}) => {
    return(
        <>
            <div>
                <div>{Details.id}</div>
                <div>{Details.Description}</div>
            </div>
        </>
    )
}

export default PostCard;