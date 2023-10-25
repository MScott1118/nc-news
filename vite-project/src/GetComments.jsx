import { useState, useEffect } from "react";
import { AllComments } from "./Components/GetRequests/AllComments";
import { useParams } from "react-router-dom";

function GetComments() {
  let { article_id } = useParams();
  console.log(article_id);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    AllComments(article_id).then((fetchedComments) => {
      setIsLoading(false);
      setComments(fetchedComments);
    });
  }, []);

  return (
    <ul className="CommentList">
      {comments.map((comment, index) => {
        let date = "Loading...";
        date = new Date(Date.parse(comment.created_at));
        return (
          <li key={index}>
            <section className="Comment">
              <p>Comment ID: {comment.comment_id}</p>
              <p>Author: {comment.author}</p>
              <p>Body: {comment.body}</p>
              <p>
                Created At:{" "}
                {date.getDate() +
                  "/" +
                  (Number(date.getMonth()) + 1) +
                  "/" +
                  date.getFullYear()}
              </p>
              <p>Votes: {comment.votes}</p>
            </section>
          </li>
        );
      })}
    </ul>
  );
}

export default GetComments;
