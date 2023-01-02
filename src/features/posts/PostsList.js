import { useSelector } from 'react-redux';
import { selectPostIds, getPostsError, getPostsStatus } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';

const PostsList = () => {
    //using selector to grab all the posts in our state
    const orderedPostIds = useSelector(selectPostIds)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return(
        <section className="grid">
            {content}
        </section>
    )
}

export default PostsList