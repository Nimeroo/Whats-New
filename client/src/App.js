import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Router } from "react-router";
import { getArticles, getSearchedArticles } from "./Services/api-config";
import ArticleHome from "./Screens/ArticleHome/ArticleHome";
import ArticleDetails from "./Screens/ArticleDetails/ArticleDetails";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  let history = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      const articleList = await getArticles();
      if (articleList) {
        setArticles(articleList);
      }
    };
    history("/home");
    fetchArticles();
  }, []);

  const fetchSearchedArtciles = async (input) => {
    const searchedArticles = await getSearchedArticles(input);
    setArticles(searchedArticles);
  };

  return (
    <div className="App">
        <Routes>
          <Route
            path="/home"
            element={
              <ArticleHome
                articles={articles}
                fetchSearchedArtciles={fetchSearchedArtciles}
              />
            }
          />
          <Route
            path="/article/:id"
            element={<ArticleDetails articles={articles} />}
          />
        </Routes>
    </div>
  );
}

export default App;
