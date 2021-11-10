import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Screens/Landing";
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

  const fetchSearchedArtciles = async (input) => {
    const searchedArticles = await getSearchedArticles(input);
    setArticles(searchedArticles);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
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
