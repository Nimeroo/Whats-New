import "./Sidebar.css";
import { Box } from "@mui/material";
import React, { useState } from "react";

export const Sidebar = ({ categories, fetchSearchedArticlesByCategory }) => {
  const capitalize = (category) => {
    let firstLetter = category[0].toUpperCase();
    let restOfWord = category.slice(1);
    let uppercaseCategory = firstLetter + restOfWord;
    return uppercaseCategory;
  };

  return (
    <Box className="sidebar__block">
      <ul className="sidebar__block__categories">
        {categories.map((category) => {
          return (
            <li
              onClick={(e) => {
                let currCategory = e.target.innerHTML.toLowerCase();
                let prevCategory = document.getElementsByClassName(
                  "sidebar__block__categories__selected"
                )[0];
                e.target.className = "sidebar__block__categories__selected";
                if (currCategory !== prevCategory.innerHTML.toLowerCase()) {
                  prevCategory.className = "";
                }
                fetchSearchedArticlesByCategory(category);
              }}
              key={category}
            >
              {capitalize(category)}
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
