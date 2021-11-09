import "./ArticleDetails.css";
import thumbnailConverter from "../../Util/thumbnailConverter";
import { Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const ArticleDetails = ({ articles }) => {
  const [article, setArticle] = useState(null);
  let history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const articleInfo = articles.find((article) => article.id === id);
    if (articleInfo) {
      setArticle(articleInfo);
    }
  }, [id, articles]);

  if (!article) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Button onClick={() => history.goBack()}>Go Back</Button>
      <Typography>{article.title}</Typography>
      <Typography>{article.author}</Typography>
      <img src={thumbnailConverter(article.category, article.image)}></img>
      <Typography>{article.description}</Typography>
      <a id="article-url" href={article.url}>
        Article Page Here
      </a>
    </div>
  );
};

export default ArticleDetails;
