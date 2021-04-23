const apiKey = "OjmLJWr_2o5EeaRAEureMETgZxVjKKgU2_LrHsLO7xwhPWnB";
const domain = "https://api.currentsapi.services/v1/";
let url = `${domain}latest-news?language=en&apiKey=${apiKey}`;

/*
Latest News Display 
*/

const initialGet = async () => {
  try {
    let response = await axios.get(url);
    let articles = response.data.news
    createArticle(articles)
  } catch (error) {
    console.log(error);
  }
}

initialGet()

/*
News Display Based on Input
*/

const articleGet = async (inputSearch) => {
  if (!inputSearch) {
    try {
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

/*
Creates containers for each article and adds
cliking functionality for each container.
*/

function createArticle(articles) {
  articles.forEach((article) => {
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
    articleTitle.setAttribute("id", article.id);
    articleImage.setAttribute("id", article.id);
    if (article.image == "None") {      ///Setting Image deaults
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
    articleContainer.addEventListener("click", (e) => {
      const articleClick = articles.find((art) => {
        return art.id === e.target.id;
      })
      showArticle(articleClick);
    })
  });
}

/*
Removes articles
*/

function removeArticle() {
  let articleList = document.querySelector('.article-list');
  while (articleList.firstChild) {
    articleList.removeChild(articleList.firstChild);

  }
}

/*
function that runs on article being clicked
*/

function showArticle(expandedArticle) {
  const articleList = document.querySelector('.article-list');
  removeArticle();
  const articleInfo = `
  <div class="expanded-art-container">
    <div class="go-back-container">Go Back</div>
    <h1 class="title-container">${expandedArticle.title}</h1>
    <h6 class="author-container"> Written by: ${expandedArticle.author}</h6>
    <img class="image-container" src="${expandedArticle.image}" />
    <h3 class="desc-container">${expandedArticle.description}</h3>
    <a class="art-link-container" href = ${expandedArticle.url}>Article Page Here</a>
  </div>
  `

  articleList.insertAdjacentHTML("beforeend", articleInfo);
  const revert = document.querySelector('.go-back-container');
  revert.addEventListener("click", () => {
    removeArticle();
    articleGet(inputSearch);
  })
}

/*
Search bar and button functionality
*/

const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const inputSearch = document.querySelector("#search-bar").value;
  removeArticle()
  articleGet(inputSearch);
});

