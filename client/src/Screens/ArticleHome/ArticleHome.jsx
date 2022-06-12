import "./ArticleHome.css";
import { Container } from "@mui/material";
import Articles from "../../Components/Articles/Articles";
import { ArticlesSkeleton } from "../../Components/ArticlesSkeleton/ArticlesSkeleton";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

const ArticleHome = ({
  articles,
  articleStatus,
  headlines,
  input,
  categories,
  fetchSearchedArticlesByCategory,
}) => {
  return (
    <div className="home__block">
      {categories && (
        <Container id="sidebar__block" fixed>
          <Sidebar
            fetchSearchedArticlesByCategory={fetchSearchedArticlesByCategory}
            categories={categories}
          />
        </Container>
      )}

      {articles && (
        <Container id="article__block" fixed>
          {headlines && <div className="article__block__label">Headlines</div>}
          {input && (
            <div className="article__block__label">{`Articles related to "${input}"`}</div>
          )}
          {articles.length === 0 && articleStatus === "ok" ? (
            <h1>No articles related to this topic</h1>
          ) : (
            <Articles articles={articles} articleStatus={articleStatus} />
          )}
        </Container>
      )}

      {!articles && (
        <Container id="article-skeleton__block" fixed>
          <ArticlesSkeleton />
        </Container>
      )}
    </div>
  );
};

export default ArticleHome;
