import "./ArticleDetails.css"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"

const ArticleDetails = ({ articles }) => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const articleInfo = articles.find((article) => article.id === id);
    if(articleInfo){
      setArticle(articleInfo);
    }
    console.log(article)
  }, [id, articles]);

  if (!article) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <h5>{article.author}</h5>
      <img src={article.image}></img>
    </div>
  );
};

export default ArticleDetails;