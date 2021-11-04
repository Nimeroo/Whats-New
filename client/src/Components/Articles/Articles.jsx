import "./Articles.css";
import {Link} from "react-router-dom";


const Articles = ({articles}) => {
    return (
        <div>
            {articles.map((article) => {
                return(
                    <div key={article.id}>
                        <Link to={`/article/${article.id}`}>
                            <h4 id="article-title">{article.title}</h4>
                            <img id="article-img" src={article.image}></img>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default Articles
