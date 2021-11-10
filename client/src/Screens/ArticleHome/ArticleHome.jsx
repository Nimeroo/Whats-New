import "./ArticleHome.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Articles from "../../Components/Articles/Articles";

const ArticleHome = ({ articles, fetchSearchedArtciles }) => {
  const [input, setInput] = useState("");
  const history = useNavigate();

  const handleSumbit = (e) => {
    fetchSearchedArtciles(input);
    e.preventDefault();
  };

  return (
    <Container fixed>
      <form id="search-area" onSubmit={handleSumbit}>
        <label>
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
          <TextField
            label="Search"
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
      </form>
      <Articles articles={articles} />
    </Container>
  );
};

export default ArticleHome;
