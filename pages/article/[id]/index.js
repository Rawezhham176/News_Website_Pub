import React from "react";
import { useRouter } from "next/router";

const article = ({ articles }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;

  return <div>{articles.articles.id}</div>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=de&apiKey=YourApiKey"
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

export default article;
