import fs from "fs";
import path from "path";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Accidental Developer Blog</title>
      </Head>

      <h2>Hello</h2>
    </div>
  );
}

// get the markdown posts
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  return {
    props: {
      posts: "The Posts",
    },
  };
}
