import { AllArticles } from "./GetRequests/AllArticles";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import IndividualArticle from "./IndividualArticle";

function ArticleCard() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    AllArticles().then((fetchedArticles) => {
      setIsLoading(false);
      setArticles(fetchedArticles);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul className="ArticleList">
      {articles.map((article, index) => {
        return (
          <li key={index}>
            <section className="Article">
              <p>Article ID: </p>
              <Link to={`${article.article_id}`}>{article.article_id}</Link>
              <p>Title: {article.title}</p>
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
            </section>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleCard;
