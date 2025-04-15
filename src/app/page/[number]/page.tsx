import React from 'react'
import { allPosts, Post } from 'contentlayer/generated'
import PostsList from '@/components/PostsList';
import PostsPagination from '@/components/PostsPagination';

interface Props {
    params: {
        number: string;
    }
}

export const generateStaticParams = () => {
  const postsPerPage = 1;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const params = Array.from({ length: totalPages }, (_, i) => ({
    number: (i + 1).toString(),
  }));

  return params;
};

export const generateMetadata = ({params}: Props) => {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.number);
    return {
        title: post?.title,
        description: post?.description
    };
}


const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPost = posts.length;
const postPerPage = 1;
const totalPages = Math.ceil(totalPost/postPerPage);

const LayoutPage = ({params}: Props) => {
  const currentPage = parseInt(params.number);
  const postsPerPage = 2;

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  const paginatedPosts = posts.slice(start, end);
    return (
        <div>
            <h1 className='text-center my-4 text-3xl'>Posts</h1>
            <div className="grid gap-4">
                <PostsList posts={paginatedPosts}></PostsList>
                <PostsPagination totalPages={totalPages} currentPages={currentPage}></PostsPagination>
            </div>
        </div>
    )
}

export default LayoutPage

