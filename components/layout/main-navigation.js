import Link from "next/link";

import Logo from "./logo";
import classes from "./main-navigation.module.css";

//🤕🤕[DYNAMIC HEADER]🤕🤕 this file will hold the actual Navigation Bar
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* <a> */}
        <Logo />
        {/* </a> */}
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          {/* 🤕🤕[DYNAMIC HEADER]🤕🤕 here the <Link href='/posts'> will navigation to [PAGES/POSTS/index.js] */}
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {/* 🤕🤕[DYNAMIC HEADER]🤕🤕 here the <Link href='/contacts'> will navigation to [PAGES/contact.js] */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
