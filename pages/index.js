import Head from "next/head"; //🎧🎧[HEAD/ META DATA]🎧🎧

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
//🌼🌼[DUMMY POST DATA]🌼🌼

function HomePage(props) {
  //🌼🌼[DUMMY POST DATA]🌼🌼
  return (
    <>
      <Head>
        <title>MCI' Blog</title>{" "}
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
