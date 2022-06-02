import "./App.css";
import { Routes, Route } from "react-router-dom";
import { getArticles, getSearchedArticles } from "./Services/api-config";
import ArticleHome from "./Screens/ArticleHome/ArticleHome";
import ArticleDetails from "./Screens/ArticleDetails/ArticleDetails";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";

function App() {
  const [articles, setArticles] = useState(null);
  const [headlines, setHeadlines] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const articleList = await getArticles();
      if (articleList) {
        setArticles(articleList);
      }
    };
    fetchArticles();
  }, []);

  const fetchSearchedArticles = async (input) => {
    setArticles(null);
    const searchedArticles = await getSearchedArticles(input);
    input ? setHeadlines(false) : setHeadlines(true);
    setArticles(searchedArticles);
  };

  return (
    <div className="App">
      <Header fetchSearchedArticles={fetchSearchedArticles} />
      <Routes>
        <Route
          path="/"
          element={<ArticleHome headlines={headlines} articles={articles} />}
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
