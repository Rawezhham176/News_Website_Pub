import React from "react";
import Head from "next/head";
import ArticleList from "../components/ArticleList";
import styles from "../styles/Introduction.module.css";

const Entertainment = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Sports</title>
        <meta name="description" content="programming" />
      </Head>
      <h1 className={styles.headline}>Entertainment News</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=de&category=entertainment&pageSize=100&apiKey=YourApiKey"
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

export default Entertainment;
