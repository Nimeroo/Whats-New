import "./ArticleHome.css";
import { useEffect, useState } from "react";
import { getArticles, getSearchedArticles } from "../../Services/api-config";
import Articles from "../../Components/Articles/Articles";

const Articlehome = () => {
  const [articleList, setArticleList] = useState([]);
  const [input, setInput ] = useState("")

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles();
      setArticleList(articles);
    };
    fetchArticles();
  }, []);

  const handleSumbit = (e) => {
    const fetchSearchedArtciles = async () => {
      const searchedArticles = await getSearchedArticles(input);
      setArticleList(searchedArticles);
    }
    fetchSearchedArtciles();
    e.preventDefault();
  }

  return (
    <div>
      <form
        onSubmit={handleSumbit}
      >
        <label>
          <button type="submit">Search</button>
          <input onChange={(e) => setInput(e.target.value)} />
        </label>
      </form>
      <Articles articles={articleList} />
    </div>
  );
};

export default Articlehome;
