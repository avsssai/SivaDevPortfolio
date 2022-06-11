import Link from 'next/link';
import { PostMeta } from 'pages/_api/api';
import React from 'react';
import { ArrowRight } from 'react-feather';
import styled from 'styled-components';
import Articles from '../Articles';
const Wrapper = styled.section`
  margin: 2rem 24px 5rem 24px;
`;
const BlogHeader = styled.h2`
  font-size: clamp(2rem, 2vw, 36px);
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 1rem;
  color: var(--color-textPrimary);
`;

const FeaturedPosts = styled.h4`
  color: var(--color-accentPink);
  font-size: clamp(1rem, 1.5vw, 24px);
  margin-bottom: 1rem;
  font-style: italic;
  font-weight: 400;
`;
const ReadMoreLink = styled.div`
  display: flex;
  gap: 0.2rem;
  cursor: pointer;
  & a {
    color: inherit;
  }
  & a:hover {
    text-decoration: none;
  }
`;

const Blog = ({ posts }: { posts: PostMeta[] }): JSX.Element => {
  return (
    <Wrapper>
      <BlogHeader>Blog</BlogHeader>
      <FeaturedPosts>Featured Posts</FeaturedPosts>
      <Articles posts={posts} />
      <ReadMoreLink>
        <Link href="/blog">Read more blogs</Link>
        <Link href="/blog">
          <ArrowRight />
        </Link>
      </ReadMoreLink>
    </Wrapper>
  );
};

export default Blog;
