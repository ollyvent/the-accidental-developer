// CustomHeader.jsx
import Link from "next/link";

// CustomHeader component for the website header
function CustomHeader() {
  return (
    <header className="custom-header">
      <div className="custom-container">
        {/* Navigation link to the homepage */}
        <Link href="/">
          <div className="brand-name">
            TechBlog
          </div>
          <span className="role">INNOVATOR</span>
        </Link>
      </div>
    </header>
  );
}

export default CustomHeader;
