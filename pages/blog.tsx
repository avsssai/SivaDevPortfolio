import Articles from '@/src/components/Articles';
import Layout from '@/src/components/Layout';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import styled from 'styled-components';
import { getAllPosts, PostMeta } from '../src/api';

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
    <Layout>
      <Content>
        <BackLink>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <Link href="/">Back to home</Link>
        </BackLink>
        <Articles posts={posts} />
      </Content>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts()
    .map((post) => post.meta)
    .sort((a, b) => {
      if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
        return -1;
      } else if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
        return 1;
      } else {
        return 0;
      }
    });
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
