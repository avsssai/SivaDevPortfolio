import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
const POSTS_PATH = path.join(process.cwd(), 'posts');

export const getSlugs = () => {
  // const paths = fs.readFileSync(
  // path.resolve(process.cwd(), 'posts/reduce.mdx')
  // );
  const paths = sync(`${POSTS_PATH.replace(/\\/g, '/')}/*.mdx`);
  return paths.map((path) => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split('.');
    return slug;
  });
};

export const getAllPosts = () => {
  const posts = getSlugs().map((slug) => getPostFromSlug(slug));
  const sortedPosts = posts
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
  return sortedPosts;
};

export interface Post {
  content: string;
  meta: PostMeta;
}
export interface PostMeta {
  excerpt: string;
  title: string;
  date: string;
  tags: string[];
  slug: string;
}

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);
  return {
    content,
    meta: {
      excerpt: data.excerpt,
      title: data.title ?? slug,
      date: (data.date ?? new Date()).toString(),
      tags: (data.tags ?? []).sort(),
      slug
    }
  };
};
