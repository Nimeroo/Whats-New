import "./Articles.css";


const Articles = ({articles}) => {
    return (
        <div>
            {articles.map((article) => {
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
