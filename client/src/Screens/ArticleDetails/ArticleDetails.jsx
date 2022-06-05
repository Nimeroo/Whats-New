import "./ArticleDetails.css";
import thumbnailConverter from "../../Util/thumbnailConverter";
import { Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container } from "@mui/system";

const ArticleDetails = ({ articles }) => {
  const [article, setArticle] = useState(null);
  let history = useNavigate();
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
    <Container fixed>
        <ArrowBackIcon className="article-details__block__back-button" onClick={() => history(-1)}>
          Go Back
        </ArrowBackIcon>
      <Box className="article-details__block">
        <div className="article-details__block__title">
          <Typography variant="h3" align="left" fontWeight="bold" marginBottom="5px">{article.title}</Typography>
          <Typography variant="h5" align="left" fontStyle="italic">Written by: {article.author}</Typography>
        </div>
        <img
          className="article-details__block__image"
          alt={article.category[0]}
          src={thumbnailConverter(article.category, article.image)}
        ></img>
        <Typography variant="h5" align="left" width="95%">{article.description}</Typography>
        <a className="article-details__block__url" href={article.url} target="_blank">
          Click here to read more.
        </a>
      </Box>
    </Container>
  );
};

export default ArticleDetails;
