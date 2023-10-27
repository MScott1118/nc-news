import { useState, useEffect } from "react";
import { AllComments } from "./Components/GetRequests/AllComments";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function GetComments() {
  let { article_id } = useParams();
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
      <Link to="new">Create New Comment!</Link>
      <p></p>
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
              <button
                className="deleteComment"
                onClick={() => deleteComment(comment.comment_id)}
              >
                Delete Comment
              </button>
              <p></p>
            </section>
          </li>
        );
      })}
    </ul>
  );
}

function deleteComment(comment_id) {
  return axios
    .delete(`https://nc-news-32mx.onrender.com/api/comments/${comment_id}`)
    .then(() => {
      window.location.reload(false);
    });
}
export default GetComments;
