import ReactMarkdown from "react-markdown"; //🔖🔖[MARKDOWN]🔖🔖

import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";

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

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${slug.post}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === "image") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  }; // 🥒🥒[IMG's]🥒🥒 here we are creating IMG's dynamic adjustable on the responsive screen sizes, check also in the <ReactMarkdown rendered={customRenderers} from bellow 👇

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown rendered={customRenderers}>{post.content}</ReactMarkdown>
      {/* 🔖🔖[MARKDOWN]🔖🔖 wrapping out content inside of <ReactMarkdown>...here...</ReactMarkdown> */}
    </article>
  );
}

export default PostContent;
