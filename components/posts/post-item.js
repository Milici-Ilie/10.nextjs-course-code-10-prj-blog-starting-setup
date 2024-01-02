import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

//📮📮[FEATURED POSTS]📮📮
function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post; //📮📮[FEATURED POSTS]📮📮 those props/ data/ info's are coming from the [COMPONENTS/POSTS/post-grid.js] file... check bellow to see how we implemented those props

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`; //here we created a path connection to ${slug} wich will selecty dyamically the ${image}

  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
//📮📮[FEATURED POSTS]📮📮
export default PostItem;
