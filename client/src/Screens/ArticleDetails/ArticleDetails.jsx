import "./ArticleDetails.css"
import thumbnailConverter from "../../Util/thumbnailConverter"
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
}, [id, articles]);

if (!article) {
    return <h1>Loading...</h1>
}

  return (
    <div>
      <h2>{article.title}</h2>
      <h5>{article.author}</h5>
      <img src={thumbnailConverter(article.category, article.image)}></img>
    </div>
  );
};

export default ArticleDetails;