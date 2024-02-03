import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <div className="acc">
            Accidental
          </div>
          <span id="dev">DEVELOPER</span>
        </Link>
      </div>
    </header>    
  );
}

export default Header;
