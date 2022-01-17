import React from "react";
import Link from "next/link";
import styles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <div className={styles.card}>
      <img src={article.urlToImage} alt="" />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <div className={styles.data}>
        <h5 className={styles.date}>{article.publishedAt}</h5>
        <Link href={article.url} className={styles.link_a}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ArticleItem;
