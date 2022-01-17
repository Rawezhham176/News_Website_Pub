import React from "react";
import styles from "../styles/Bottom.module.css";
import Image from "next/image";
import rawi from "../public/rawi1.png";

const Bottom = () => {
  return (
    <div className={styles.bottom_box}>
      <h1>
        <hr />
        This website is <span>non-commercial</span> and is{" "}
        <span>open source</span>
        <hr />
      </h1>
      <div className={styles.bottom_box_about}>
        <div className={styles.bottom_box_about_img}>
          <Image src={rawi} />
        </div>
        <p>
          "I love creating things for myself and sharing them with people. If
          you are interested in doing something amazing and being part of of a
          great cause, you can join in too. Contact me and we'll talk about it"
        </p>
      </div>
    </div>
  );
};

export default Bottom;
