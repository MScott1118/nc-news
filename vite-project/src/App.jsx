import "./App.css";
import GetArticles from "./Components/GetArticles";
import Home from "./Components/Home";
import GetComments from "./GetComments";
import PostComment from "./PostComment";
import Topics from "./Components/Topics";
import CookingTopic from "./CookingTopic";
import CodingTopic from "./CodingTopic";
import ErrorPage from "./ErrorPage";
import FootballTopic from "./FootballTopic";
import { Link, Route, Routes } from "react-router-dom";
import IndividualArticle from "./Components/IndividualArticle";
import PostCommentError from "./PostCommentError";

function App() {
  return (
    <>
      <h1>NC News</h1>
      <nav>
        <Link to="/">Home |</Link>
        <Link to="/api/articles"> Articles |</Link>
        <Link to="/api/topics"> Topics |</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/articles" element={<GetArticles />} />
        <Route
          path="/api/articles/:article_id"
          element={<IndividualArticle />}
        />
        <Route
          path="/api/articles/:article_id/comments"
          element={<GetComments />}
        />
        <Route
          path="/api/articles/:article_id/comments/new"
          element={<PostComment />}
        />
        <Route path="/api/topics" element={<Topics />} />
        <Route path="/api/topics/cooking" element={<CookingTopic />} />
        <Route path="/api/topics/coding" element={<CodingTopic />} />
        <Route path="/api/topics/football" element={<FootballTopic />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/api/articles/:article_id/comments/new/error"
          element={<PostCommentError />}
        />
      </Routes>
    </>
  );
}

export default App;
