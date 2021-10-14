import "./Articles.css"
import { useState } from "react"


const Articles = ({Articles}) => {

    const [articleList, setArticleList] = useState([])
    setArticleList(Articles)

    return (
        <div>
            {articleList.map((article) => {
                return(
                    <div>
                        <h4 id="article-title">{article.title}</h4>
                        <img id="article-img" src={article.image}></img>
                    </div>
                )
            })}
        </div>
    );
}

export default Articles
