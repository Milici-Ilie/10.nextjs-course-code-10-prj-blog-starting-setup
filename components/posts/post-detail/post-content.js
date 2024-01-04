import ReactMarkdown from "react-markdown"; //🔖🔖[MARKDOWN]🔖🔖

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

// const DUMMY_POSTS = {
//   slug: "getting-started-with-nextjs1",
//   title: "Getting Started with NextJS",
//   image: "getting-started-nextjs.png",
//   date: "2022-02-10",
//   content: "# This is a first post",
// }; //🔖🔖[MARKDOWN]🔖🔖 now the 'content' will display a <h1> title </h1> on our page 🔖🔖[MARKDOWN]🔖🔖

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
      {/* 🔖🔖[MARKDOWN]🔖🔖 wrapping out content inside of <ReactMarkdown>...here...</ReactMarkdown> */}
    </article>
  );
}

export default PostContent;
