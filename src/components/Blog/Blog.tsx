import { PostMeta } from 'pages/_api/api';
import React from 'react';
import styled from 'styled-components';
import Articles from '../Articles';
const Wrapper = styled.section`
  margin: 0px 24px;
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

const Blog = ({ posts }: { posts: PostMeta[] }): JSX.Element => {
  return (
    <Wrapper>
      <BlogHeader>Blog</BlogHeader>
      <FeaturedPosts>Featured Posts</FeaturedPosts>
      <Articles posts={posts} />
    </Wrapper>
  );
};

export default Blog;
