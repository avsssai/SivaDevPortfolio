import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getPostFromSlug, getSlugs, PostMeta } from '@/src/api';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import styled from 'styled-components';
import { QUERIES } from '@/src/styles/constants';
import { ArrowLeft } from 'react-feather';
import Link from 'next/link';
import Layout from '@/src/components/Layout';
import TagsComponent from '@/src/components/Tags';
import Date from '@/src/components/Date';
import YouTube from '@/src/components/Youtube';
import StackBlitz from '@/src/components/StackBlitz/StackBlitz';
import Image from 'next/image';
import Gif from '@/src/components/Gif';
import ToolTip from '@/src/components/Tooltip/Tooltip';
import InlineCode from '@/src/components/InlineCode/InlineCode';
import Button from '@/src/components/Button/Button';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import 'highlight.js/styles/atom-one-dark.css';
// import ImageInsert from '@/src/components/ImageInsert';

import Disqus from '@/src/components/Disqus';
import dynamic from 'next/dist/shared/lib/dynamic';
const ImageInsert = dynamic(() => import('@/src/components/ImageInsert'), {
  ssr: false
});

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

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
const Content = styled.div`
  margin: 0 auto;
  width: min(100%, 60ch);
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
  margin-bottom: 4rem;
`;

const BlogContent = styled.div`
  margin: revert;
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  div,
  span,
  code,
  ul {
    margin-bottom: 2rem;
    line-height: 1.5;
  }
  & li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
  color: var(--color-textPrimary);

  & p,
  code,
  ul {
    font-size: 1.1rem;
  }
  & code,
  pre {
    overflow: auto;
    width: 100%;
  }
  & a {
    color: var(--color-accentPink);
  }

  & a:hover {
    text-decoration: none;
  }
  & h1 > a,
  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    color: var(--color-textSecondary);
    text-decoration: none;
  }

  & p,
  ul,
  li {
    font-family: var(--font-secondary);
  }
  & .rehype-code-title {
    background-color: #282c34;
    color: #abb2bf;
    padding: 10px 17.66px;
    border-bottom: 1px solid #abb2bf;
    font-weight: bold;
    margin-bottom: 0;
  }
`;

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <Layout>
        <Content>
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
          <BlogContent>
            <MDXRemote
              {...post.source}
              components={{
                YouTube,
                Image,
                Gif,
                ToolTip,
                Button,
                ImageInsert,
                InlineCode,
                StackBlitz
              }}
            />
          </BlogContent>
        </Content>
        {/* <Disqus
          slug={post.meta.slug}
          title={post.meta.title}
          url={`http://localhost:3000/blog/${post.meta.slug}`}
        /> */}
        {/* <Disqus slug={post.meta.slug} /> */}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeCodeTitles,
        rehypeHighlight
      ]
    }
  });
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
