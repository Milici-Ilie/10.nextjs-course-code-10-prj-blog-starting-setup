import Head from "next/head"; //🎧🎧[HEAD/ META DATA]🎧🎧

import Layout from "../components/layout/layout";
import "../styles/globals.css";
//🤕🤕[DYNAMIC HEADER]🤕🤕 we need this '_app.js' file to create our Dynamic Header, like I say'd for more details check Section 8
//🎧🎧[HEAD/ META DATA]🎧🎧
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* 🎧🎧[HEAD/ META DATA]🎧🎧 */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* 🎧🎧[HEAD/ META DATA]🎧🎧 */}
      <Component {...pageProps} />;
    </Layout>
  );
} //🤕🤕[DYNAMIC HEADER]🤕🤕 here we are wrapping the <Component .../> inside of our <Layout> ... here ... </Layout>

export default MyApp;
