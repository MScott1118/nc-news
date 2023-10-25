import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

function GetArticles() {
  return (
    <>
      <h3>All Articles:</h3>
      <ArticleCard />
    </>
  );
}

export default GetArticles;
