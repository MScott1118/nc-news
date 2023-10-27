import { useNavigate } from "react-router-dom";

function PostCommentError() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Error: Please complete all fields to post a comment!</h1>
      <button onClick={() => navigate(-1)}>Go Back!</button>
    </>
  );
}

export default PostCommentError;
