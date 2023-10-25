import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://nc-news-32mx.onrender.com/api/",
});

export const GetIndividualArticle = (article_id) => {
  return baseURL.get("articles").then(({ data: { articles } }) => {
    let singleArticle = [];
    articles.foreach((article) => {
      if (article.article_id === article_id) {
        singleArticle.push(article);
      }
      return singleArticle;
    });
    return singleArticle;
  });
};
