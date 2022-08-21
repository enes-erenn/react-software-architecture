import React from "react";
import useDataSSR from "../../useDataSSR";

const Articles = () => {
  const articles = useDataSSR("articles", () => {
    if (window && !window.preloadedArticles) {
      console.log("No preloaded articles found, fetching from the server");
      return fetch("http://localhost:8080/api/articles").then((response) =>
        response.json()
      );
    }
  });

  return (
    <>
      {articles &&
        articles.map((article) => (
          <div key={article.title}>
            <h3>{article.title}</h3>
            <h3>{article.author}</h3>
          </div>
        ))}
    </>
  );
};

export default Articles;
