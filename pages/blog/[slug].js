import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";

function PostPage({frontmatter: {title, date, cover_image}, slug, content}) {
  return (
    <>
      <Link legacyBehavior href='/'>
        <a className="btn btn-back">Go Back</a>
      </Link>
    </>
  )
}

export default PostPage

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false

    }
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.md'), 'utf-8');

    const {data: frontmatter, content} = matter(markdownWithMeta)
    return {
        props: {
            frontmatter,
            slug,
            content
        },
    }
}