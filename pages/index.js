import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
//🌼🌼[DUMMY POST DATA]🌼🌼
function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs1",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack easyer",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack easyer",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack easyer",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack easyer",
      date: "2022-02-10",
    },
  ];
  //🌼🌼[DUMMY POST DATA]🌼🌼
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
