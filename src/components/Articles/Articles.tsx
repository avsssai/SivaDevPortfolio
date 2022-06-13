import React from 'react';
import type { PostMeta } from '@/src/api';
import styled from 'styled-components';
import Link from 'next/link';
import TagsComponent from '../Tags';
import Date from '../Date';

const BlogsContainer = styled.div``;
const BlogTitle = styled.div`
  /* font-size: clamp(1.5rem, 1.5vw, 32px); */
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.1;
  width: min(100%, 600px);
  & a {
    text-decoration: none;
    color: inherit;
  }
  & a:hover {
    text-decoration: revert;
  }
`;
const BlogExcerpt = styled.div`
  font-size: clamp(1rem, 1.5vw, 18px);
  color: var(--color-textPrimary);
  font-family: var(--font-secondary);
`;
const BlogWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: min(100%, 600px);
`;

export default function Articles({
  posts
}: {
  posts: PostMeta[];
}): JSX.Element {
  return (
    <BlogsContainer>
      {/* <BlogTitle>My First Blog!</BlogTitle>
    <BlogExcerpt>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
      ullam?
    </BlogExcerpt> */}
      {posts.map((post) => (
        <BlogWrapper key={post.slug}>
          <BlogTitle>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </BlogTitle>
          <Date date={post.date} />
          <TagsComponent tags={post.tags} />
          <BlogExcerpt>{post.excerpt}</BlogExcerpt>
        </BlogWrapper>
      ))}
    </BlogsContainer>
  );
}
