import "./App.css";
import GetArticles from "./Components/GetArticles";
import Home from "./Components/Home";
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
      </Routes>
    </>
  );
}

export default App;
