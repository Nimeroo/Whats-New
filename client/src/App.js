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
      const articleList = await getArticles();
      if(articleList){
        setArticles(articleList);
      }
    };
    fetchArticles();
  }, [])

  const fetchSearchedArtciles = async (input) => {
    const searchedArticles = await getSearchedArticles(input);
    setArticles(searchedArticles);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Articlehome
            articles={articles}
            fetchSearchedArtciles={fetchSearchedArtciles}
          />
        </Route>
        <Route path="/article/:id">
          <ArticleDetails articles={articles} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
