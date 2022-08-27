import React from "react";
import styled from "styled-components";
import useDataSSR from "../../useDataSSR";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;

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
    <Container>
      {articles &&
        articles.map((article) => (
          <div key={article.title}>
            <h3>{article.title}</h3>
            <h3>{article.author}</h3>
          </div>
        ))}
    </Container>
  );
};

export default Articles;
