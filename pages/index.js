import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils"

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Accidental Developer Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) =>(
        <Post post={post} />
        ))}
      </div>
    </div>
  );
}

// get the markdown posts
export async function getStaticProps() {
  // get markdown files from posts directory
  const files = fs.readdirSync(path.join("posts"));

  // get slug and front matter from posts
  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");

    // get front matter
    const markDownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markDownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate)
    },
  };
}
