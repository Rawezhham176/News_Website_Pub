import React from "react";
import styles from "../styles/Layout.module.css";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_icons}>
        <ul>
          <li>
            <Link href="https://www.facebook.com/rawezh.ham">
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.footer_icons_hover}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/rawezh_hama_">
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.footer_icons_hover}
              />
            </Link>
          </li>
          <li>
            <Link href="https://de.linkedin.com/in/rawezh-hama-404778211">
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.footer_icons_hover}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.xing.com/profile/Rawezh_Hama2">
              <FontAwesomeIcon
                icon={faXing}
                className={styles.footer_icons_hover}
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Rawezhham176">
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.footer_icons_hover}
              />
            </Link>
          </li>
        </ul>
      </div>

      <p>Email: rawezhhame@gmail.com</p>
      <p> Copyright by Rawezh Hama ©2022</p>
    </div>
  );
};

export default Footer;
