import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <Link to="/home">
        <h2 id="title">Whats News</h2>
      </Link>
    </div>
  );
};

export default Header;
