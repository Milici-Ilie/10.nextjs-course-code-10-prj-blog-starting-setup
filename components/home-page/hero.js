import Image from "next/image"; //this will adjust auttomatically the height and width of the IMG according to our content
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/1.jpg" alt="Hacker" width={300} height={300} />
      </div>
      <h1>Hi, I'm MCI</h1>
      <p>
        At the moment I learned HTML, CSS/SASS/SCSS, JS, REACT and now i'm
        learning NextJS. I want to learn also the Tailwind, React Native, NodeJS
        and Nest.JS!
      </p>
    </section>
  );
}

export default Hero;
