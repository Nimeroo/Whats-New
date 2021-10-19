import axios from "axios";

const domain = "https://api.currentsapi.services/v1/";

export const getArticles = async () => {
  let resp = await axios.get(
    `${domain}latest-news?language=en&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  let articles = resp.data.news;
  return articles;
};

export const getSearchedArticles = async (inputSearch) => {
  let resp = await axios.get(
    `${domain}search?keywords=${inputSearch}&language=en&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  let articles = resp.data.news;
  return articles;
};
