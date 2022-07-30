import "./Sidebar.css";
import { Box, Autocomplete, TextField } from "@mui/material";
import React from "react";

export const Sidebar = ({
  categories,
  setCategory,
  languages,
  setLanguage,
  regions,
  setRegion,
}) => {
  const capitalize = (category) => {
    let firstLetter = category[0].toUpperCase();
    let restOfWord = category.slice(1);
    let uppercaseCategory = firstLetter + restOfWord;
    return uppercaseCategory;
  };

  return (
    <Box className="sidebar__block">
      <div className="sidebar__block__lang-region">
        {languages && (
          <Autocomplete
            onChange={(e) => {
              !Object.keys(languages.languages).includes(e.target.innerHTML)
                ? setLanguage("en")
                : setLanguage(languages.languages[e.target.innerHTML]);
            }}
            options={Object.keys(languages.languages)}
            renderInput={(params) => <TextField {...params} label="Language" />}
          />
        )}
        <Autocomplete
          onChange={(e) => {
            !Object.keys(regions).includes(e.target.innerHTML)
              ? setRegion("INT")
              : setRegion(regions[e.target.innerHTML]);
          }}
          options={Object.keys(regions)}
          renderInput={(params) => <TextField {...params} label="Region" />}
        />
      </div>
      <ul className="sidebar__block__categories">
        {categories.map((category) => {
          return (
            <li
              onClick={(e) => {
                setCategory(category);
                let currCategory = e.target.innerHTML.toLowerCase();
                let prevCategory = document.getElementsByClassName(
                  "sidebar__block__categories__selected"
                )[0];
                e.target.className = "sidebar__block__categories__selected";
                if (currCategory !== prevCategory.innerHTML.toLowerCase()) {
                  prevCategory.className = "";
                }
                if (currCategory === prevCategory.innerHTML.toLowerCase()) {
                  setCategory("");
                  prevCategory.className = "";
                }
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
