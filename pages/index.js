import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Accidental Developer Blog</title>
      </Head>
      <div className="hero">
        <h1>From Misfit to Marverick:</h1>
        <h3>A Journey of Transformation and Triumph in Programming</h3>
        <br />
        <img className="light-bulb" src="./images/posts/light_bulb.jpg" alt="" />
        <p>
          This is a compelling story of self discovery, resilience and personal
          triumph. <br /> <br /> Join me as i uncover my very challenging
          journey, going from accidentally enrolling into a front-End Developer
          class, to discovering my own special way of learning to code, and
          becoming an extra-ordinary developer, and guess what? <br /> Learn
          Programming through this process
        </p>
        <br />
        <br />
        <h3>My Boot-Camp Series</h3>
      </div>
      <div className="posts">
        {posts.map((post, index) => (
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
      posts: posts.sort(sortByDate),
    },
  };
}
