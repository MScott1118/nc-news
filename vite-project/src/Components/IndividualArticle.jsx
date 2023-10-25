import { useParams } from "react-router-dom";
import { GetIndividualArticle } from "./GetRequests/GetIndividualArticle";
import { AllArticles } from "./GetRequests/AllArticles";
import { useState, useEffect } from "react";

function IndividualArticle() {
  let { article_id } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    AllArticles().then((fetchedArticles) => {
      setIsLoading(false);
      setArticles(fetchedArticles);
    });
  }, []);

  let singleArticle = [
    {
      article_id: "Loading...",
    },
  ];
  articles.map((article) => {
    if (article.article_id === Number(article_id)) {
      singleArticle.pop();
      singleArticle.push(article);
    }
  });

  return (
    <>
      <p>Article ID: {singleArticle[0].article_id}</p>
      <p>Title: {singleArticle[0].title}</p>
      <p>Author: {singleArticle[0].author}</p>
      <p>Topic: {singleArticle[0].topic}</p>
      <p>Votes: {singleArticle[0].votes}</p>
      <p>Comment Count: {singleArticle[0].comment_count}</p>
      <p>Created At: {singleArticle[0].created_at}</p>
      <img src={`${singleArticle[0].article_img_url}`} alt="Article Image" />
    </>
  );
}

export default IndividualArticle;
