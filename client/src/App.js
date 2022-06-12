import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  getArticleCategories,
  getArticles,
  getSearchedArticles,
  getSearchedArticlesByCategories,
} from "./Services/api-config";
import ArticleHome from "./Screens/ArticleHome/ArticleHome";
import ArticleDetails from "./Screens/ArticleDetails/ArticleDetails";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";

function App() {
  const [articles, setArticles] = useState(null);
  const [articleStatus, setArticleStatus] = useState(null);
  const [categories, setCategories] = useState(null);
  const [headlines, setHeadlines] = useState(true);
  const [searchedInput, setSearchedInput] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getArticleCategories();
      if (categoryList) {
        setCategories(categoryList);
      }
    };
    const fetchArticles = async () => {
      const articleList = await getArticles();
      if (articleList) {
        setArticles(articleList.news);
        setArticleStatus(articleList.status);
      }
    };
    fetchCategories();
    fetchArticles();
  }, []);

  const fetchSearchedArticles = async (input) => {
    setArticles(null);
    setSearchedInput(input);
    const searchedArticles = await getSearchedArticles(input);
    input ? setHeadlines(false) : setHeadlines(true);
    setArticles(searchedArticles.news);
    setArticleStatus(searchedArticles.status);
  };

  const fetchSearchedArticlesByCategory = async (category) => {
    setArticles(null);
    const filteredArticles = await getSearchedArticlesByCategories(
      searchedInput,
      category
    );
    setArticles(filteredArticles.news);
    setArticleStatus(filteredArticles.status);
  };

  return (
    <div className="App">
      <Header fetchSearchedArticles={fetchSearchedArticles} />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleHome
              fetchSearchedArticlesByCategory={fetchSearchedArticlesByCategory}
              headlines={headlines}
              input={searchedInput}
              articles={articles}
              articleStatus={articleStatus}
              categories={categories}
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
