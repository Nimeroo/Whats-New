import "./App.css";
import { Routes, Route } from "react-router-dom";
import { getArticles, getSearchedArticles } from "./Services/api-config";
import ArticleHome from "./Screens/ArticleHome/ArticleHome";
import ArticleDetails from "./Screens/ArticleDetails/ArticleDetails";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";

function App() {
  const [articles, setArticles] = useState([]);

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
    const searchedArticles = await getSearchedArticles(input);
    setArticles(searchedArticles);
  };

  return (
    <div className="App">
      <Header fetchSearchedArticles={fetchSearchedArticles}/>
      <Routes>
        <Route path="/" element={<ArticleHome
          articles={articles}
        />} />
        <Route
          path="/article/:id"
          element={<ArticleDetails articles={articles} />}
        />
      </Routes>
    </div>
  );
}

export default App;
