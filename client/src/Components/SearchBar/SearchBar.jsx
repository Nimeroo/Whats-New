import React from "react";
import { useState } from "react";
import "./SearchBar.css";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({ fetchSearchedArticles }) => {
  const [input, setInput] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    fetchSearchedArticles(input);
  };

  return (
    <div className="search-area">
      <form onSubmit={handleSumbit}>
          <IconButton type="submit">
            <SearchIcon fontSize="small" />
          </IconButton>
          <TextField
            size="small"
            label="Search topics and headlines"
            onChange={(e) => setInput(e.target.value)}
          />
      </form>
    </div>
  );
};
