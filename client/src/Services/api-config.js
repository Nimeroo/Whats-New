import axios from "axios";

const domain = "https://api.currentsapi.services/v1/";

export const getArticles = async (input, category, lan, region) => {
  let resp = "";
  if (input === "") {
    resp = await axios.get(
      `${domain}latest-news?&category=${category}&language=${lan}&country=${region}&page_size=15&apiKey=${process.env.REACT_APP_API_KEY}`
    );
  } else
    resp = await axios.get(
      `${domain}search?keywords=${input}&category=${category}&language=${lan}&country=${region}&page_size=15&apiKey=${process.env.REACT_APP_API_KEY}`
    );
  let articles = resp.data;
  return articles;
};

export const getArticleCategories = async () => {
  let resp = await axios.get(`${domain}available/categories`);
  let categories = resp.data.categories;
  return categories;
};

export const getArticleLang = async () => {
  let resp = await axios.get(`${domain}available/languages`);
  let languages = resp.data;
  return languages;
};

export const getArticleRegions = async () => {
  let resp = await axios.get(`${domain}available/regions`);
  let region = resp.data;
  return region;
};
