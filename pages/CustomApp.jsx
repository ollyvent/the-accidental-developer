// CustomApp.jsx
import "@/styles/globals.css";
import CustomHeader from "../components/CustomHeader";

// CustomApp component as the main layout for the website
export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      {/* Including the custom header */}
      <CustomHeader />
      <main className="custom-container">
        {/* Rendering the main content */}
        <Component {...pageProps} />
      </main>
    </>
  );
}
