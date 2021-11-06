import "./ArticleHome.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Articles from "../../Components/Articles/Articles";

const Articlehome = ({ articles, fetchSearchedArtciles }) => {
  const [input, setInput] = useState("");

  const handleSumbit = (e) => {
    fetchSearchedArtciles(input);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
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
    </div>
  );
};

export default Articlehome;
