import React, { useState, useEffect } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ language }) => {
  const [lang, setLanguage] = useState("DE");
  const [menu, setMenu] = useState(false);
  const [dis, setDis] = useState("none");

  useEffect(() => {
    return () => {
      if (menu) {
        setDis("block");
        setMenu(false);
      } else {
        setMenu("none");
      }
    };
  }, [menu]);

  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/general">General</Link>
          </li>
          <li>
            <Link href="/business">Business</Link>
          </li>
          <li>
            <Link href="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link href="/health">Health</Link>
          </li>
          <li>
            <Link href="/science">Science</Link>
          </li>
          <li>
            <Link href="/sports">Sports</Link>
          </li>
          <li>
            <Link href="/technology">Technology</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>

      <nav className={styles.nav_min}>
        <Link href="/">
          <h1>Ida.News</h1>
        </Link>

        <ul style={{ display: dis }} onClick={() => setDis("none")}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/general">General</Link>
          </li>
          <li>
            <Link href="/business">Business</Link>
          </li>
          <li>
            <Link href="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link href="/health">Health</Link>
          </li>
          <li>
            <Link href="/science">Science</Link>
          </li>
          <li>
            <Link href="/sports">Sports</Link>
          </li>
          <li>
            <Link href="/technology">Technology</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.nav_min_burger}
          onClick={() => setMenu(!menu)}
        />
      </nav>
    </>
  );
};

export default Nav;
