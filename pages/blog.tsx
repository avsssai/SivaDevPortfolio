import Articles from '@/src/components/Articles';
import MaxWidthWrapper from '@/src/components/MaxWidthWrapper';
import { QUERIES } from '@/src/styles/constants';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import styled from 'styled-components';
import { getAllPosts, PostMeta } from './_api/api';

const BlogWrapper = styled(MaxWidthWrapper)`
  margin-top: 2rem;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 5rem;
  }
`;

const BackLink = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  & a {
    color: inherit;
  }
  & a:hover {
    text-decoration: none;
  }
`;
const Content = styled.div`
  margin: 0 auto;
  width: min(100%, 60ch);
`;
interface Props {
  posts: PostMeta[];
}
const Blog: NextPage<Props> = ({ posts }) => {
  //   console.log(posts);
  return (
    <BlogWrapper>
      <Content>
        <BackLink>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <Link href="/">Back to home</Link>
        </BackLink>
        <Articles posts={posts} />
      </Content>
    </BlogWrapper>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts().map((post) => post.meta);
  //   return {
  //     props: {
  //       posts
  //     }
  //   };
  return {
    props: {
      posts
    }
  };
};

export default Blog;

// { posts }: { posts: PostMeta[] }
