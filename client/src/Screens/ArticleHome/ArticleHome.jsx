import "./ArticleHome.css";
import { Container } from "@mui/material";
import Articles from "../../Components/Articles/Articles";
import { ArticlesSkeleton } from "../../Components/ArticlesSkeleton/ArticlesSkeleton";

const ArticleHome = ({ articles, headlines, input }) => {
  return (
    <div>
      {articles && (
        <Container className="article__block" fixed>
          {headlines && <div className="headline__block__label">Headlines</div>}
          {input && (
            <div className="headline__block__label">{`Articles related to "${input}"`}</div>
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
