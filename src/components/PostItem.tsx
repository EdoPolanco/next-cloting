import { Post } from 'contentlayer/generated';
import Link from 'next/link'
import React from 'react'

interface Props {
    posts: Post;
}

const PostItem = ({ posts }: Props) => {
    return (
        <article className='shadow p-4 rounded-md'>
            <h2 className='text-2xl'>
                <Link href={posts.url}>{posts.title}</Link>
            </h2>
            <time className='text-2xl'>
                {new Date(posts.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })
                }
            </time>
        </article>
    )
}

export default PostItem