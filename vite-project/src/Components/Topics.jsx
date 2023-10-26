import { AllArticles } from "./GetRequests/AllArticles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Topics() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    AllArticles().then((fetchedArticles) => {
      setArticles(fetchedArticles);
    });
  }, []);

  return (
    <>
      <h2>Topics: </h2>
      <p></p>
      <Link to={`/api/topics/cooking`}>{`Cooking`}</Link>
      <p></p>
      <Link to={`/api/topics/coding`}>{`Coding`}</Link>
      <p></p>
      <Link to={`/api/topics/football`}>{`Football`}</Link>
    </>
  );
}

export default Topics;
