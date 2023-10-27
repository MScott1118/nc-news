import { AllArticles } from "./Components/GetRequests/AllArticles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FootballTopic() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    AllArticles().then((fetchedArticles) => {
      setArticles(fetchedArticles);
    });
  }, []);

  const football = [];

  articles.map((article) => {
    if (article.topic === "football") {
      football.push(article);
    }
  });

  return (
    <ul className="ArticleList">
      {football.map((article, index) => {
        return (
          <li key={index}>
            <section className="Article">
              <p>Title: {article.title}</p>
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
              <Link to={`/api/articles/${article.article_id}`}>
                Visit Article
              </Link>
              <p></p>
            </section>
          </li>
        );
      })}
    </ul>
  );
}

export default FootballTopic;
