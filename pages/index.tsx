import type { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';
import Blog from '../src/components/Blog';
import Header from '../src/components/Header';
import LandingPage from '../src/components/LandingPage';
import MaxWidthWrapper from '../src/components/MaxWidthWrapper';
// import path from 'path';
import { getAllPosts, getSlugs, PostMeta } from 'pages/_api/api';
const ApplicationWrapper = styled(MaxWidthWrapper)``;

interface Props {
  posts: PostMeta[];
}

const Home: NextPage<Props> = ({ posts }: { posts: PostMeta[] }) => {
  console.log(posts);
  return (
    <div>
      <Header></Header>
      <ApplicationWrapper>
        <LandingPage />
        <Blog posts={posts} />
      </ApplicationWrapper>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
    .slice(0, 4)
    .map((post) => post.meta);

  return {
    props: {
      posts
    }
  };
};

export default Home;
