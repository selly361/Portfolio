import { GitHubIcon, LinkedInIcon } from "icons";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src={"/logo.png"}
          height="48"
          width="48"
          alt="logo"
          objectFit="contain"
        />
      </Link>
      <nav className={styles.header__nav}>
        <Link href="#projects">Projects</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      <nav className={styles.header__nav_icons}>
        <Link href="https://github.com/selly361" target="_blank">
          <GitHubIcon className={styles.github_icon} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/seikou-sillah-883912249/"
          target="_blank"
        >
          <LinkedInIcon className={styles.linkedIn_icon} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
