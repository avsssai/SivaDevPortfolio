import type { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';
import Blog from '../src/components/Blog';
import Header from '../src/components/Header';
import LandingPage from '../src/components/LandingPage';
import MaxWidthWrapper from '../src/components/MaxWidthWrapper';
// import path from 'path';
import { getAllPosts, getSlugs, PostMeta } from '@/src/api';
import Footer from '@/src/components/Footer';
const ApplicationWrapper = styled(MaxWidthWrapper)``;

interface Props {
  posts: PostMeta[];
}

const Home: NextPage<Props> = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <div>
      <Header></Header>
      <ApplicationWrapper>
        <LandingPage />
        <Blog posts={posts} />
      </ApplicationWrapper>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  const posts = getAllPosts()
    .map((post) => post.meta)
    .sort((a, b) => {
      if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
        return 1;
      } else if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(Math.max(allPosts.length - 3, 0))
    .reverse();

  return {
    props: {
      posts
    }
  };
};

export default Home;
