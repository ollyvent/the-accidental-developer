import Link from "next/link";
function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <h2>
            Accidental <span>DEVELOPER</span>
          </h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
