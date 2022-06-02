import "./ArticleHome.css";
import { Container } from "@mui/material";
import Articles from "../../Components/Articles/Articles";
import { ArticlesSkeleton } from "../../Components/ArticlesSkeleton/ArticlesSkeleton";

const ArticleHome = ({ articles, headlines }) => {
  return (
    <div>
      {articles && (
        <Container fixed>
          {headlines && <div>Headlines</div>}
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
