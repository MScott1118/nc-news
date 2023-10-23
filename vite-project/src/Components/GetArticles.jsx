import { useState, useEffect } from "react";
import { AllArticles } from "./GetRequests/AllArticles";

function GetArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    AllArticles().then((fetchedArticles) => {
      setArticles(fetchedArticles);
    });
  }, []);

  return (
    <>
      <h3>All Articles:</h3>
      {articles.map((article) => {
        return (
          <>
            <section className="Article">
              <p>Article ID: {article.article_id}</p>
              <p>Title: {article.title}</p>
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
              <p></p>
            </section>
          </>
        );
      })}
    </>
  );
}

export default GetArticles;
