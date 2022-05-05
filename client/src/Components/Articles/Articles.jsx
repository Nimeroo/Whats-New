import "./Articles.css";
import { Grid, Typography, Paper } from "@mui/material/";
import thumbnailConverter from "../../Util/thumbnailConverter";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <Grid alignItems="center" justifyContent="center" container spacing={5}>
      {articles.map((article) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Link className="article__link" to={`/article/${article.id}`}>
              <Paper height="fit-content" elevation={3} id="article">
                <img
                  className="article__image"
                  alt={article.category[0]}
                  src={thumbnailConverter(article.category, article.image)}
                ></img>
                <Typography
                  marginLeft={"1em"}
                  marginRight={"0.5em"}
                  marginBottom={"0"}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  fontSize={15}
                  fontWeight="bold"
                  className="article__title"
                >
                  {article.title}
                </Typography>
                <p className="article__author">
                  Written by: <b>{article.author}</b>
                </p>
                <p className="article__time">
                  Time Published: {article.published}
                </p>
              </Paper>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Articles;
