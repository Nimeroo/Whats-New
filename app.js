const apiKey = "OjmLJWr_2o5EeaRAEureMETgZxVjKKgU2_LrHsLO7xwhPWnB";
const domain = "https://api.currentsapi.services/v1/";

const articleGet = async (inputSearch) => {
  if (!inputSearch) {
    try {
      let url = `${domain}latest-news?language=en&apiKey=${apiKey}`;
      let response = await axios.get(url);
      let articles = response.data.news
      createArticle(articles)
    } catch (error) {
      console.log(error)
    }

  } else {
    try {
      let url = `${domain}search?keywords=${inputSearch}&language=en&apiKey=${apiKey}`
      let response = await axios.get(url);
      let articles = response.data.news
      createArticle(articles)
    } catch (error) {
      console.log(error);
    }

  }
}

const initialGet = async () => {
  try {
    let url = `${domain}latest-news?language=en&apiKey=${apiKey}`;
    let response = await axios.get(url);
    let articles = response.data.news
    createArticle(articles)
  } catch (error) {
    console.log(error);
  } finally { }
}

initialGet()


function createArticle(articles) {
  console.log(articles);
  articles.forEach((article) => {
    console.log(article)
    const articleList = document.querySelector('.article-list');
    const articleContainer = document.createElement('div');
    const articleTitle = document.createElement('h4');
    const articleImage = document.createElement('img');
    articleContainer.classList.add('article');
    articleTitle.classList.add('article-title');
    articleImage.classList.add('article-image');
    articleList.append(articleContainer);
    articleContainer.append(articleTitle);
    articleContainer.append(articleImage);
    articleTitle.innerText = article.title;
    if (article.image == "None") {
      if (article.category[0] == "academia") {
        articleImage.src = "./lib/Academia.jpg";
      } else if (article.category[0] == "business") {
        articleImage.src = "./lib/Buissness.jpg";
      } else if (article.category[0] == "regional") {
        articleImage.src = "./lib/Regional.jpg";
      } else if (article.category[0] == "technology") {
        articleImage.src = "./lib/Printed-Circuit-Board.jpg";
      } else if (article.category[0] == "lifestyle") {
        articleImage.src = "./lib/Lifestyle.jpeg";
      } else if (article.category[0] == "general") {
        articleImage.src = "./lib/General.jpg";
      } else if (article.category[0] == "programming") {
        articleImage.src = "./lib/Programming.jpg";
      } else if (article.category[0] == "science") {
        articleImage.src = "./lib/Science.jpg";
      } else if (article.category[0] == "entertainment") {
        articleImage.src = "./lib/Entertainment.jpg";
      } else if (article.category[0] == "world") {
        articleImage.src = "./lib/Earth.jpg";
      } else if (article.category[0] == "sports") {
        articleImage.src = "./lib/Sports.jpg";
      } else if (article.category[0] == "finance") {
        articleImage.src = "./lib/Money.jpeg";
      } else if (article.category[0] == "politics") {
        articleImage.src = "./lib/Politics.jpg";
      } else if (article.category[0] == "health") {
        articleImage.src = "./lib/Health.jpg";
      } else if (article.category[0] == "opinion") {
        articleImage.src = "./lib/opinions.png";
      } else if (article.category[0] == "food") {
        articleImage.src = "./lib/food.jpg";
      } else if (article.category[0] == "game") {
        articleImage.src = "./lib/games.png";
      }
    } else {
      articleImage.src = article.image
    }
  });

}

function removeArticle() {
  let articleList = document.querySelector('.article-list');
  while (articleList.firstChild) {
    articleList.removeChild(articleList.firstChild);

  }
}

const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
  e.preventDefault()
  removeArticle()
  const inputSearch = document.querySelector("#search-bar").value;
  console.log(inputSearch);
  articleGet(inputSearch);
});

