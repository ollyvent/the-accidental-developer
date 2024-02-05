// CustomPostPage.jsx
import Link from "next/link";

// CustomPostPage component for displaying detailed post content
function CustomPostPage({
  frontmatter: { title, date, coverImage },
  slug,
  content,
}) {
  return (
    <>
      {/* Link to go back to the homepage */}
      <Link href="/">
        <a className="custom-btn back-btn">Go Back</a>
      </Link>
      <div className="custom-card custom-card-page">
        {/* Displaying post title and details */}
        <h1 className="custom-post-title">{title}</h1>
        <div className="custom-post-date">Published on {date}</div>
        <img src={coverImage} alt="" />

        {/* Displaying post content */}
        <div className="custom-post-body">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>

        {/* Link to go back to the homepage */}
        <Link href="/">
          <a className="custom-btn back-btn">Go Back</a>
        </Link>
      </div>
    </>
  );
}

export default CustomPostPage;


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
