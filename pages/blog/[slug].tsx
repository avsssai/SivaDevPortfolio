import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getPostFromSlug, getSlugs } from 'pages/_api/api';
import { serialize } from 'next-mdx-remote/serialize';

export default function PostPage() {
  return (
    <>
      <Head>
        <title>Post Title</title>
      </Head>
      <h3>Post title</h3>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content);
  console.log(mdxSource);
  return {
    props: {}
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
