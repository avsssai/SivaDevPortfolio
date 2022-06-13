import Articles from '@/src/components/Articles';
import Layout from '@/src/components/Layout';
import { QUERIES } from '@/src/styles/constants';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts, PostMeta } from '@/src/api';
import { ArrowLeft } from 'react-feather';
import styled from 'styled-components';

const TagHeader = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: var(--color-accentPink);
`;
const Content = styled.div`
  margin: 0 auto;
  width: min(100%, 60ch);
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
  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 4rem;
  }
`;

const TagPage = ({
  slug,
  posts
}: {
  slug: string;
  posts: PostMeta[];
}): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <Content>
        <BackLink>
          <Link href="/blog">
            <ArrowLeft />
          </Link>
          <Link href="/blog">All blogs</Link>
        </BackLink>
        <TagHeader>tag [{slug}]</TagHeader>
        <Articles posts={posts} />
      </Content>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => {
    return {
      params: {
        slug: tag
      }
    };
  });
  return {
    paths,
    fallback: false
  };
};

export default TagPage;
