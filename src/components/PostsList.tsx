import { Post } from 'contentlayer/generated';
import React from 'react'
import PostItem from './PostItem';

interface Props {
    posts: Post[];
}

const PostsList = ({ posts }: Props) => {
    return (
        <>

            {posts.map((post) => (
                <PostItem
                    key={post._raw.flattenedPath}
                    posts={post}>
                </PostItem>
            ))}
        </>
    )
}

export default PostsList