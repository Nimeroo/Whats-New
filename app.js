const apiKey = "OjmLJWr_2o5EeaRAEureMETgZxVjKKgU2_LrHsLO7xwhPWnB";
const domain = "https://api.currentsapi.services/v1/";

const articleGet = async () => {
  const inputSearch = document.querySelector("#search-bar").value;
  if (inputSearch === "") {
    try {
      let url = `${domain}latest-news?language=en&apiKey=${apiKey}`;
      let response = await axios.get(url);
      console.log(response);
    } catch (error) {

    }
  } else {
    try {
      let url = `${domain}search?keywords=${inputSearch}&language=en&apiKey=${apiKey}`
      let response = await axios.get(url);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const createArticle = () => {
    const articleList = document.querySelector('.article-list');
    const article = document.createElement('div');
    const articleTitle = document.createElement('div');
    article.classList.add('article');
    articleTitle.classList.add('article-title');
    articleList.appendChild(article);
    article.appendChild(articleTitle);
  }
}



const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", articleGet);