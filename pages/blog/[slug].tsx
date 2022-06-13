import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getPostFromSlug, getSlugs, PostMeta } from 'pages/_api/api';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import styled from 'styled-components';
import { QUERIES } from '@/src/styles/constants';
import { ArrowLeft } from 'react-feather';
import Link from 'next/link';
import Layout from '@/src/components/Layout';
import TagsComponent from '@/src/components/Tags';
import Date from '@/src/components/Date';
interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

// const BlogWrapper = styled(MaxWidthWrapper)`
//   margin-top: 2rem;

//   @media ${QUERIES.tabletAndUp} {
//     margin-top: 5rem;
//   }
// `;

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

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 900;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <Layout>
        <BackLink>
          <Link href="/blog">
            <ArrowLeft />
          </Link>
          <Link href="/blog">All blogs</Link>
        </BackLink>
        <TitleWrapper>
          <Title>{post.meta.title}</Title>
          <Date date={post.meta.date} />
          <TagsComponent tags={post.meta.tags} />
        </TitleWrapper>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content);
  console.log(mdxSource);
  return {
    props: {
      post: {
        source: mdxSource,
        meta
      }
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false
  };
};
