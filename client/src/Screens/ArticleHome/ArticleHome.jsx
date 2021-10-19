import "./ArticleHome.css"
import { useEffect, useState } from 'react';
import { getArticles, getSearchedArticles } from '../../Services/api-config';
import Articles from "../../Components/Articles/Articles";

const Articlehome = () => {

    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        const fetchArticles = async () => {
            const articles = await getArticles()
            setArticleList(articles)
        };
        fetchArticles();
    }
    , []);

    console.log(articleList)

    return (
        <div>
            <Articles articles={articleList}/>
        </div>
    );
}

export default Articlehome;
