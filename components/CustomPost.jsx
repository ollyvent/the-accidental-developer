// CustomPost.jsx
import Link from "next/link";

// CustomPost component for displaying individual blog posts
function CustomPost({ post }) {
  return (
    <div className="custom-card">
      {/* Displaying post cover image */}
      <img src={post.frontmatter.coverImage} alt="" />

      {/* Displaying post details */}
      <div className="custom-post-date">Published on {post.frontmatter.date}</div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.summary}</p>

      {/* Link to the detailed post page */}
      <Link href={`/blog/${post.slug}`}>
        <a className="custom-btn">Read More</a>
      </Link>
    </div>
  );
}

export default CustomPost;
