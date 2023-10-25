import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://nc-news-32mx.onrender.com/api/",
});

export const AllArticles = () => {
  return baseURL.get("articles").then(({ data: { articles } }) => {
    return articles;
  });
};
