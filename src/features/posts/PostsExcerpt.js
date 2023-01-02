import PostAuthor from './PostsAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';


const PostsExcerpt = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId))

    return(
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <div className="buttonsContainer">
                <ReactionButtons post={post}/>
            </div>
        </article>
    )
}

// PostsExcerpt = React.memo(PostsExcerpt)
//allows this component to not rerender if the props that it's received has not changed
//in order to do this we need to import React from react and change the const to let for the component

export default PostsExcerpt