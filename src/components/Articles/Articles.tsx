import React from 'react';
import type { PostMeta } from 'pages/_api/api';
import styled from 'styled-components';
import Link from 'next/link';

const BlogsContainer = styled.div``;
const BlogTitle = styled.div`
  font-size: clamp(1.5rem, 1.5vw, 32px);
  font-weight: 700;
  margin-bottom: 1rem;
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
  width: min(100%, 600px);
`;

const Tags = styled.div`
  display: flex;
  gap: 0.825rem;
  margin-bottom: 1rem;
  width: min(100%, 600px);
  flex-wrap: wrap;
  line-height: 0.8rem;
  & a {
    color: inherit;
    text-decoration: none;
  }
  & a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Tag = styled.div`
  color: var(--color-textPrimary);
  font-weight: 300;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  border: 1px dotted white;
  padding: 0.4rem;
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
          <Tags>
            {post.tags.map((tag) => (
              <Tag key={tag}>
                <Link href={`/tags/${tag}`}>{tag}</Link>
              </Tag>
            ))}
          </Tags>
          <BlogExcerpt>{post.excerpt}</BlogExcerpt>
        </BlogWrapper>
      ))}
    </BlogsContainer>
  );
}
