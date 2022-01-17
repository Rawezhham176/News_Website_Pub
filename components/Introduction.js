import React from "react";
import styles from "../styles/Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <h1>
        Welcome to a brand new <br />
        <span>News Site</span>
        <br />
        <span>Ida.News</span>
      </h1>
      <p>
        There is always something to read. In today's life, we have so many
        opportunities to read and find the information we are looking for. But
        there are too many sources. We feel lost and confused. This is the point
        where we come. This website is automatically updated every day. Then all
        you have to do is visit us. Enjoy your reading ;).
      </p>
    </div>
  );
};

export default Introduction;
