import React from "react";
import rawezh from "../public/rawezh.jpeg";
import Image from "next/image";
import styles from "../styles/about.module.css";
import Donation from "../components/Donation";

const about = () => {
  return (
    <div>
      <h1 className={styles.rawezh_head}>I'm Rawezh</h1>
      <div className={styles.rawezh_box}>
        <div className={styles.rawezh_img}>
          <Image src={rawezh} alt="rawezh" />
        </div>
        <p>
          {" "}
          My name is rawezh. I am 25 years old and live in Hamburg. At the
          moment I am doing an apprenticeship as a software engineer. Before
          this education I studied graphic design and a little bit journalism. I
          already have experience with many programming languages like Java,
          Kotlin, Swift, C#, C, Java Script. On the side, I spend my time
          designing as a ui/ux designer and love to write and make music. I love
          meeting new people, nature, animals and of course my job.
        </p>
      </div>
      <Donation />
    </div>
  );
};

export default about;
