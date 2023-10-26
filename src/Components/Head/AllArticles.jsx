import { useEffect, useState } from "react"
import { getAllArticles, getArticleByArticleId } from "../../axios"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

function AllArticles() {
    const [articleList, setArticleList] = useState([
        {
        "article_id": 34,
        "title": "The Notorious MSG’s Unlikely Formula For Success",
        "topic": "cooking",
        "author": "grumpy19",
        "created_at": "2020-11-22T11:13:00.000Z",
        "votes": 0,
        "article_img_url": "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
        "comment_count": "11"
        }
    ])
    
    return (
        <section>
            <h2>Articles</h2>
            <ArticleFinder setArticleList={setArticleList}/>
            <ListArticles articleList={articleList}/>
        </section>
    )
}


function ArticleFinder({setArticleList, articleList}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [userInput, setUserInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    
    const displayAllArticles = async() => {
        setIsLoading(true)
        const {data: {articles}} = await getAllArticles()
        setArticleList(articles)
        setIsLoading(false)


    }
    useEffect(() => {
     displayAllArticles()  
    }, [])
    return isLoading ? (<p>Loading...</p>) :(
        <div className="search-articles">
            <h2>Search Articles</h2>
            <form>
                <input></input>
                <button>Search</button>
                
                
                <Link to="/topics">Get Articles By Topic</Link>
            </form>
        </div>
    )
}



function ListArticles({articleList }) {
    return (
        <section className="show-articles">
            <h2>All Articles</h2>
            <ul className="articles-list">
                
                {articleList.map((article) => {
                     const timestamp = article.created_at
                     const date = new Date(timestamp)
                     const options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
                     const formattedDate = date.toLocaleDateString('en-GB', options)
                    
                    return (
                        <div key={article.article_id}>
                            <li className="article">
                                <p>#{article.article_id}</p>
                                
                                <h4>{article.title}</h4>
                                <p>Topic: {article.topic}</p>
                                <img className="article-image" src={article.article_img_url} alt="article picture"/>
                                <p>Uploaded: {formattedDate}</p>
                                <p>Author: {article.author}</p>

                                <p>Comments: {article.comment_count}</p>
                                <Link className="read-article-button" to={`/articles/${article.article_id}`}>Read Article</Link>

                            </li>

                        </div>
                    )
                })}
            </ul>
        </section>
    )

}

export default AllArticles