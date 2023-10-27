import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function PostComment() {
  const navigate = useNavigate();
  let { article_id } = useParams();
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(username, body, article_id)
            .then(() => {
              navigate(`/api/articles/${article_id}/comments`);
            })
            .catch((err) => {
              navigate(`/api/articles/${article_id}/comments/new/error`);
            });
        }}
      >
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <p></p>
        <label>
          Comment:
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <p></p>
        <input type="submit" value="Submit" />
      </form>
      <p></p>
      <Link to={`/api/articles/${article_id}/comments`}>Back</Link>
    </>
  );
}

function handleSubmit(username, body, article_id) {
  // const navigate = useNavigate();

  // if (username === "" || body === "") {
  //   navigate(`/api/articles/${article_id}/comments/new/error`);
  // }

  return axios
    .post(
      `https://nc-news-32mx.onrender.com/api/articles/${article_id}/comments`,
      { username: username, body: body }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      throw new error();
    });
}

export default PostComment;
