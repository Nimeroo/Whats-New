import "./Articles.css";
import { Grid, Typography, Paper } from "@mui/material/";
import thumbnailConverter from "../../Util/thumbnailConverter";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <Grid alignItems="center" justifyContent="center" container spacing={5}>
      {articles.map((article) => {
        return (
          <Grid item xs={3.5} key={article.id}>
            <Link id="article-link" to={`/article/${article.id}`}>
              <Paper elevation={10} id="article">
                <Typography
                  textAlign="center"
                  margin={2}
                  maxHeight={50}
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  text="none"
                  fontSize={15}
                  id="article-title"
                >
                  {article.title}
                </Typography>
                <img
                  id="article-img"
                  src={thumbnailConverter(article.category, article.image)}
                ></img>
              </Paper>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Articles;
