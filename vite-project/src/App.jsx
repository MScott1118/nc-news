import "./App.css";
import GetArticles from "./Components/GetArticles";
import Home from "./Components/Home";
import GetComments from "./GetComments";
import PostComment from "./PostComment";
import { Link, Route, Routes } from "react-router-dom";
import IndividualArticle from "./Components/IndividualArticle";

function App() {
  return (
    <>
      <h1>NC News</h1>
      <nav>
        <Link to="/">Home |</Link>
        <Link to="/api/articles"> Articles |</Link>
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
      </Routes>
    </>
  );
}

export default App;
