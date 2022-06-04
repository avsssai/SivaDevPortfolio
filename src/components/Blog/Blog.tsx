import React from 'react';
import styled from 'styled-components';
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

const BlogsContainer = styled.div`
  padding-bottom: 10rem;
`;
const BlogTitle = styled.div`
  font-size: clamp(1rem, 1.5vw, 32px);
  font-weight: 600;
`;
const BlogExcerpt = styled.div`
  font-size: clamp(1rem, 1.5vw, 18px);
  color: var(--color-textPrimary);
  font-family: var(--font-secondary);
`;
const Blog = (): JSX.Element => {
  return (
    <Wrapper>
      <BlogHeader>Blog</BlogHeader>
      <FeaturedPosts>Featured Posts</FeaturedPosts>
      <BlogsContainer>
        <BlogTitle>My First Blog!</BlogTitle>
        <BlogExcerpt>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
          ullam?
        </BlogExcerpt>
      </BlogsContainer>
    </Wrapper>
  );
};

export default Blog;
