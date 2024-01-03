import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";
//📮📮[FEATURED POSTS]📮📮
//🌼🌼[DUMMY POST DATA]🌼🌼 here we are importing the <PostsGrid/>

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts </h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
