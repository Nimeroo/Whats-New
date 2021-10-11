const domain = "https://api.currentsapi.services/v1/";
let url = `${domain}latest-news?language=en&apiKey=${REACT_APP_API_KEY}`;

export const getArticles = async () => {
    resp = await axios.get(url);
    articles = resp.data.news
    return articles;
}