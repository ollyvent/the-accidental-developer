// CustomDocument.jsx
import { Html, Head, Main, NextScript } from "next/document";

// CustomDocument component for customizing the HTML document structure
export default function CustomDocument() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* Rendering the main content */}
        <Main />
        {/* Including Next.js scripts */}
        <NextScript />
      </body>
    </Html>
  );
}
