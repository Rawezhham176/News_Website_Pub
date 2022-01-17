import React from "react";
import Head from "next/head";
import ArticleList from "../components/ArticleList";
import styles from "../styles/Introduction.module.css";

const Health = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Sports</title>
        <meta name="description" content="programming" />
      </Head>
      <h1 className={styles.headline}>Health News</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=de&category=health&pageSize=100&apiKey=76a2781c156b4bbbbf65148aa716f127"
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

export default Health;
