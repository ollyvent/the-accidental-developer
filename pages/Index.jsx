// Index.jsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import CustomPost from "../components/CustomPost";
import { sortByDate } from "../utils";


// Home component for the homepage
export default function Home({ posts }) {
  return (
    <div>
      {/* Setting metadata for the webpage */}
      <Head>
        <title>TechBlog - Empowering Innovators</title>
      </Head>

      {/* Hero section of the homepage */}
      <div className="hero">
        <h1 className="main-heading"><b>EMBRACING TECH INNOVATION</b></h1><br />
        <h6>A Journey of Transformation and Triumph in Programming</h6>
        <br />
        <img
          className="light-bulb"
          src="./images/posts/light_bulb.jpg"
          alt="light buld moment"
        />
        <p>
          This is a compelling story of self discovery, resilience and personal
          triumph.
        </p>

        <p>
          Join me as I uncover my very challenging journey, going from
          accidentally enrolling into a front-End Developer class, to
          discovering my own special way of learning to code, and becoming an
          extra-ordinary developer, and guess what?
          <p>Learn Programming through this process.</p>
        </p>

        <h2>Front-End Development Series</h2>
      </div>

      {/* Displaying blog posts on the homepage */}
      <div className="custom-posts">
        {posts.map((post, index) => (
          <CustomPost post={post} key={index} />
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
