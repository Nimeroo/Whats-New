const domain = "https://api.currentsapi.services/v1/";

export const getArticles = async () => {
  resp = await axios.get(
    `${domain}latest-news?language=en&apiKey=${REACT_APP_API_KEY}`
  );
  articles = resp.data.news;
  return articles;
};

export const getSearchedArticles = async (inputSearch) => {
  resp = await axios.get(
    `${domain}search?keywords=${inputSearch}&language=en&apiKey=${REACT_APP_API_KEY}`
  );
  articles = resp.data.news;
  return articles;
};
