import React from "react";
import ArticleItem from "./ArticleItem";
import styles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.cards}>
      {articles.articles.map((article) => (
        // eslint-disable-next-line react/jsx-key
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
