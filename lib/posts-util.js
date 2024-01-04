import fs from "fs"; //🔖🔖[MARKDOWN]🔖🔖 this will give us the possibility to loop over all the Markdown files in the [POSTS] Folder
import path from "path";
import matter from "gray-matter";
//🔖🔖[MARKDOWN]🔖🔖 for more details about this file and explanation of what is here check the Section 12, Lesson 273
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

//🎯🎯[FETCHING DATA DYNAMIC]🎯🎯
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  }; //🎯🎯[FETCHING DATA DYNAMIC]🎯🎯

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}

// export default getAllPosts;
