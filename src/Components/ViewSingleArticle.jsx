import { useEffect, useState } from "react";
import { getAllArticles, getArticleByArticleId } from "../axios";
import { useParams } from "react-router-dom";

function ViewSingleArticle(props) {
    const routeParams = useParams()
    
    const [viewArticle, SetViewArticle] = useState([
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
    const [isLoading, setIsLoading] = useState(false);
    
    
    const articleViewer = async () => {
        setIsLoading(true)
        const {data: {articles}} = await getArticleByArticleId(routeParams.article_id)
        
        SetViewArticle(articles)
        setIsLoading(false)
    }
    useEffect(() => {
        articleViewer()
    }, [routeParams.article_id])
    

    return isLoading ? (<p>Loading...</p>) :
    <article>
        <ul>
            <div key={viewArticle.article_id}>
                <li className="article">
                    <p>#{viewArticle.article_id}</p>
                                
                    <h4>{viewArticle.title}</h4>
                    <p>Topic: {viewArticle.topic}</p>
                    <img className="article-image" src={viewArticle.article_img_url} alt="article picture"/>
                    <p>{viewArticle.body}</p>
                    <p>Uploaded: {viewArticle.created_at}</p>
                    <p>Author: {viewArticle.author}</p>

                    <p>Comments: {viewArticle.comment_count}</p>
                                

                </li>
            </div>
                
            
        </ul>
    </article>
   
}

export default ViewSingleArticle;