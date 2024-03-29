import { useState } from "react";
import "./Header.css";
import { SearchBar } from "../SearchBar/SearchBar.jsx";
import Logo from "../../assets/Whats-news-logo.png";
import { Link } from "react-router-dom";
import { Toolbar } from "@mui/material";

const Header = ({ setSearchedInput }) => {
  const [navShadow, setNavShadow] = useState(0);

  window.onscroll = () => {
    if (window.pageYOffset > 20) {
      setNavShadow(3);
    } else {
      setNavShadow(0);
    }
  };

  return (
    <Toolbar sx={{ boxShadow: navShadow }} id="header">
      <Link
        to="/"
        onClick={() => {
          document.getElementsByClassName(
            "sidebar__block__categories__selected"
          )[0].className = "";
          setSearchedInput("");
        }}
      >
        <img className="header__logo" src={Logo} alt="logo"></img>
        <h2 className="header__title">Whats News</h2>
      </Link>
      <SearchBar setSearchedInput={setSearchedInput} />
    </Toolbar>
  );
};

export default Header;
