import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  getArticleCategories,
  getArticleLang,
  getArticleRegions,
  getArticles,
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
  const [languages, setLanguages] = useState([]);
  const [regions, setRegions] = useState([]);
  const [language, setLanguage] = useState("en");
  const [region, setRegion] = useState("INT");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchLanguages = async () => {
      const languageList = await getArticleLang();
      if (languageList) {
        setLanguages(languageList);
      }
    };
    const fetchRegions = async () => {
      const regionList = await getArticleRegions();
      if (regionList) {
        setRegions(regionList.regions);
      }
    };
    const fetchCategories = async () => {
      const categoryList = await getArticleCategories();
      if (categoryList) {
        setCategories(categoryList);
      }
    };
    const fetchArticles = async () => {
      const articleList = await getArticles(searchedInput, category, language, region);
      console.log(searchedInput)
      searchedInput ? setHeadlines(false) : setHeadlines(true);
      if (articleList || searchedInput) {
        setArticles(articleList.news);
        setArticleStatus(articleList.status);
      }
    };
    setArticles(null);
    fetchLanguages();
    fetchRegions();
    fetchCategories();
    fetchArticles();
  }, [category, language, region, searchedInput]);

  return (
    <div className="App">
      <Header setSearchedInput={setSearchedInput} />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleHome
              setCategory={setCategory}
              headlines={headlines}
              input={searchedInput}
              articles={articles}
              articleStatus={articleStatus}
              categories={categories}
              languages={languages}
              setLanguage={setLanguage}
              regions={regions}
              setRegion={setRegion}
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
