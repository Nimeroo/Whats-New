import "./ArticleDetails.css";
import thumbnailConverter from "../../Util/thumbnailConverter";
import { Typography, Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Box } from "@mui/system";

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
    <div id="article-details-container">
      <Box id="article-details">
        <ArrowBackIcon id="back-arrow" onClick={() => history.goBack()}>
          Go Back
        </ArrowBackIcon>
        <Typography>{article.title}</Typography>
        <Typography>{article.author}</Typography>
        <img
          id="article-image"
          src={thumbnailConverter(article.category, article.image)}
        ></img>
        <Typography>{article.description}</Typography>
        <a id="article-url" href={article.url}>
          Full Article Page Here
        </a>
      </Box>
    </div>
  );
};

export default ArticleDetails;
