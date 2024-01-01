import Layout from "../components/layout/layout";
import "../styles/globals.css";
//🤕🤕[DYNAMIC HEADER]🤕🤕 we need this '_app.js' file to create our Dynamic Header, like I say'd for more details check Section 8

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
} //🤕🤕[DYNAMIC HEADER]🤕🤕 here we are wrapping the <Component .../> inside of our <Layout> ... here ... </Layout>

export default MyApp;
