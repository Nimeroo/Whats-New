import "./ArticleHome.css";
import { Container } from "@mui/material";
import Articles from "../../Components/Articles/Articles";
import { ArticlesSkeleton } from "../../Components/ArticlesSkeleton/ArticlesSkeleton";

const ArticleHome = ({ articles, headlines, input }) => {
  return (
    <div>
      {articles && (
        <Container fixed>
          {headlines && <div className="headline__label">Headlines</div>}
          {input && (
            <div className="headline__label">{`Articles related to "${input}"`}</div>
          )}
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
