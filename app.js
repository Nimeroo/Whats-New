const apiKey = "OjmLJWr_2o5EeaRAEureMETgZxVjKKgU2_LrHsLO7xwhPWnB";
const domain = "https://api.currentsapi.services/v1/";



const articleGet = async () => {
  const inputSearch = document.querySelector("#search-bar").value;
  if (inputSearch === "") {
    try {
      let url = `${domain}latest-news?language=en&apiKey=${apiKey}`;
      let response = await axios.get(url);
    } catch (error) {
      console.log(error)
    }
  } else {
    try {
      let url = `${domain}search?keywords=${inputSearch}&language=en&apiKey=${apiKey}`
      let response = await axios.get(url);
    } catch (error) {
      console.log(error);
    }
  }
  let response = await axios.get(url)
  const articles = response.data.news;
  const createArticle = () => {
    const articleList = document.querySelector('.article-list');
    const article = document.createElement('div');
    const articleTitle = document.createElement('div');
    article.classList.add('article');
    articleTitle.classList.add('article-title');
    articleList.appendChild(article);
    article.appendChild(articleTitle);
    articleTitle.innerText = articles.title;
    if (articles.image == "None") {
      if (articles.catagory[0] == "academia") {
        article.style.backgroundImage = `url(./lib/Academia.jpg)`
      } else if (articles.catagory[0] == "business") {
        article.style.backgroundImage = `url(.lib/Buissness.jpg)`
      } else if (articles.catagory[0] == "regional") {
        article.style.backgroundImage = `url(./lib/Regional.jpg)`
      } else if (articles.catagory[0] == "technology") {
        article.style.backgroundImage = `url(./lib/Printet-Circuit-Board.jpg)`
      } else if (articles.catagory[0] == "./lib/lifestyle") {
        article.style.backgroundImage = `url(./lib/Lifestyle.jpeg)`
      } else if (articles.catagory[0] == "general") {
        article.style.backgroundImage = `url(./lib/General.jpg)`
      } else if (articles.catagory[0] == "programming") {
        article.style.backgroundImage = `url(./lib/Programming.jpg)`
      } else if (articles.catagory[0] == "science") {
        article.style.backgroundImage = `url(./lib/Science.jpg)`
      } else if (articles.catagory[0] == "entertainment") {
        article.style.backgroundImage = `url(./lib/Entertainment.jpg)`
      } else if (articles.catagory[0] == "world") {
        article.style.backgroundImage = `url(./lib/Earth.jpg)`
      } else if (articles.catagory[0] == "sports") {
        article.style.backgroundImage = `url(./lib/Sports.jpg)`
      } else if (articles.catagory[0] == "finance") {
        article.style.backgroundImage = `url(./lib/Science.jpg)`
      } else if (articles.catagory[0] == "politics") {
        article.style.backgroundImage = `url(./lib/Politics.jpg)`
      } else if (articles.catagory[0] == "health") {
        article.style.backgroundImage = `url(./lib/Health.jpg)`
      } else if (articles.catagory[0] == "opinion") {
        article.style.backgroundImage = `url(./lib/opinions.png)`
      } else if (articles.catagory[0] == "food") {
        article.style.backgroundImage = `url(./lib/food.jpg)`
      } else if (articles.catagory[0] == "game") {
        article.style.backgroundImage = `url(./lib/games.png)`
      }
    } else {
      article.style.backgroundImage = `url(${articles.image})`
    }
  }
  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", createArticle());
}

articleGet()

