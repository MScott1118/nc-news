import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://nc-news-32mx.onrender.com/api/articles/",
});

export const AllComments = (article_id) => {
  return baseURL
    .get(`${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};
