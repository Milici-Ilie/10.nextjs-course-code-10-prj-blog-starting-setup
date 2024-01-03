import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

function PostsGrid(props) {
  const { posts } = props;
  //📮📮[FEATURED POSTS]📮📮
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  ); //🌼🌼[DUMMY POST DATA]🌼🌼 now we will import the <PostGrid/> function in the 'featured-posts.js'
}

export default PostsGrid;
