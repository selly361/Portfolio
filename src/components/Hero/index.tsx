"use client";

import { BackgroundAnimation } from "components";
import React from "react";
import styles from "./Hero.module.css";
import { useTypewriter } from "react-simple-typewriter";

function Hero() {
  const words = ["Front-end", "Back-end", "Full-stack"];

  const [text] = useTypewriter({ words, loop: 0, delaySpeed: 3000 });

  return (
    <section className={styles.hero}>
      <article className={styles.article}>
        <p>{`Hello, I'm Seikou 👋🏻`}</p>
        <h2>A {text} Developer</h2>
        <p>
          {`with a passion for crafting captivating experiences and a
          commitment to embracing new technologies.`}
        </p>
        <button className={styles.button}>Portfolio</button>
      </article>
      <BackgroundAnimation />
    </section>
  );
}

export default Hero;
