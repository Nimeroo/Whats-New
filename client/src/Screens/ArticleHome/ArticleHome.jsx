import "./ArticleHome.css";
import { useState } from "react";
import {Container, TextField, IconButton} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import Articles from "../../Components/Articles/Articles";

const Articlehome = ({ articles, fetchSearchedArtciles }) => {
  const [input, setInput] = useState("");

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

export default Articlehome;
