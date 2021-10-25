import "./App.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { getArticles, getSearchedArticles } from "./Services/api-config";
import Articlehome from "./Screens/ArticleHome/ArticleHome";
import ArticleDetails from "./Screens/ArticleDetails/ArticleDetails";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles();
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  const fetchSearchedArtciles = async (input) => {
    const searchedArticles = await getSearchedArticles(input);
    setArticles(searchedArticles);
  };

  const getArticle = (id) => {
   const articleInfo = articles.filter((article) => {
     if(article.id === id){
       return article[0];
     }
   }) 
   return articleInfo;
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Articlehome
            articles={articles}
            fetchSearchedArtciles={fetchSearchedArtciles}
          />
        </Route>
        <Route path="/:id">
          <ArticleDetails getArticle={getArticle} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
