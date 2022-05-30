import "./ArticleHome.css";
import { Container } from "@mui/material";
import Articles from "../../Components/Articles/Articles";
import { ArticlesSkeleton } from "../../Components/ArticlesSkeleton/ArticlesSkeleton";

const ArticleHome = ({ articles }) => {
  return (
    <div>
      {articles && (
        <Container fixed>
          <Articles articles={articles} />
        </Container>
      )}

      {!articles && (
        <Container fixed>
          <ArticlesSkeleton />
        </Container>
      )}
    </div>
  );
};

export default ArticleHome;
