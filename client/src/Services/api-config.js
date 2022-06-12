import axios from "axios";

const domain = "https://api.currentsapi.services/v1/";

export const getArticles = async () => {
  let resp = await axios.get(
    `${domain}latest-news?language=en&type=3&page_size=15&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  let articles = resp.data;
  return articles;
};

export const getSearchedArticles = async (inputSearch) => {
  let resp = await axios.get(
    `${domain}search?keywords=${inputSearch}&language=en&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  let articles = resp.data;
  return articles;
};

export const getArticleCategories = async () => {
  let resp = await axios.get(`${domain}available/categories`);
  let categories = resp.data.categories;
  return categories;
};

export const getSearchedArticlesByCategories = async (inputSearch, category) => {
  let resp = await axios.get(
    `${domain}search?keywords=${inputSearch}&category=${category}&language=en&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  let articles = resp.data;
  return articles;
};
