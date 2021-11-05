import "./ArticleHome.css";
import { useState } from "react";
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
          <button type="submit">Search</button>
          <input onChange={(e) => setInput(e.target.value)} />
        </label>
      </form>
      <Articles articles={articles} />
    </div>
  );
};

export default Articlehome;
