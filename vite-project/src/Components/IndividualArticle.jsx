import { useParams, Link } from "react-router-dom";
import { GetIndividualArticle } from "./GetRequests/GetIndividualArticle";
import { AllArticles } from "./GetRequests/AllArticles";
import { useState, useEffect } from "react";
import axios from "axios";

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

  let date = "Loading...";
  date = new Date(Date.parse(singleArticle[0].created_at));

  if (singleArticle[0].article_id === "Loading...") {
    return (
      <>
        <h1>Error: Article does not exist!</h1>
      </>
    );
  } else {
    return (
      <>
        <p>Article ID: {singleArticle[0].article_id}</p>
        <p>Title: {singleArticle[0].title}</p>
        <p>Author: {singleArticle[0].author}</p>
        <p>Topic: {singleArticle[0].topic}</p>
        <p>Body: {singleArticle[0].body}</p>
        <p>Votes: {singleArticle[0].votes}</p>
        <p>Comment Count: {singleArticle[0].comment_count}</p>
        <p>
          Created At:{" "}
          {date.getDate() +
            "/" +
            (Number(date.getMonth()) + 1) +
            "/" +
            date.getFullYear()}
        </p>
        <img src={`${singleArticle[0].article_img_url}`} alt="Article Image" />
        <p></p>
        <button
          className="voteButton"
          onClick={() => IncreaseVotes(singleArticle)}
        >
          Upvote!
        </button>
        <button className="voteButton" onClick={() => downVote(singleArticle)}>
          Downvote!
        </button>
        <p></p>
        <Link to="comments">See all comments</Link>
      </>
    );
  }
}

export default IndividualArticle;

const IncreaseVotes = (singleArticle) => {
  return axios
    .patch(
      `https://nc-news-32mx.onrender.com/api/articles/${singleArticle[0].article_id}`,
      {
        inc_votes: 1,
      }
    )
    .then((res) => {
      console.log(res);
      window.location.reload(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

function downVote(singleArticle) {
  return axios
    .patch(
      `https://nc-news-32mx.onrender.com/api/articles/${singleArticle[0].article_id}`,
      {
        inc_votes: -1,
      }
    )
    .then((res) => {
      console.log(res);
      window.location.reload(false);
    })
    .catch((error) => {
      console.log(error);
    });
}
