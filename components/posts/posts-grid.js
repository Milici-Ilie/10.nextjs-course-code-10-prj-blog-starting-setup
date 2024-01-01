import classes from "./posts-grid.module.css";

function PostsGrid(props) {
  const { posts } = props;
  //📮📮[FEATURED POSTS]📮📮
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostsGrid;
