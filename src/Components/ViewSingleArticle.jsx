import { useEffect, useState } from "react";
import { getCommentsByArticleId, getArticleByArticleId } from "../axios";
import { useParams } from "react-router-dom";
import Votes from "./Head/Votes";
import { postComment } from "../axios";

function ViewSingleArticle({user}) {
    const routeParams = useParams()
    const [comments, setComments] = useState([{
        "comment_id": 124,
        "body": "Vitae laudantium molestiae neque ut dicta fuga similique. Sit nesciunt magni sit beatae. Porro recusandae aut exercitationem eligendi voluptas. Dolore eligendi inventore magni voluptatem quia ut ut.",
        "article_id": 34,
        "author": "grumpy19",
        "votes": -1,
        "created_at": "2020-10-17T23:05:00.000Z"
        }])
    
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
    const [commentLoading, setCommentLoading] = useState(false)
    
    
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
   ( <main className="article-view-main">
         <article>
        <ul>
            <article key={viewArticle.article_id}>
                <li className="article">
                    <p>#{viewArticle.article_id}</p>
                                
                    <h4>{viewArticle.title}</h4>
                    <p>Topic: {viewArticle.topic}</p>
                    <img className="article-image" src={viewArticle.article_img_url} alt="article picture"/>
                    <p className="article-body">{viewArticle.body}</p>
                    <p>Uploaded: {viewArticle.created_at}</p>
                    <p>Author: {viewArticle.author}</p>
                    <Votes votes={viewArticle.votes} article_id={routeParams.article_id}/>

                    
                                

                </li>
                
                
            </article>
            

                
        </ul>
        
        
       
    </article>
    <CommentSection isLoading={isLoading} setComments={setComments} setCommentLoading={setCommentLoading} comments={comments} routeParams={routeParams} user={user} />
   </main> 
  
    )
   
}

function CommentSection({commentLoading, setCommentLoading, setComments, comments, routeParams, user}) {
    
    const commentViewer = async () => {
        setCommentLoading(true)
        const {data: {comments}} = await getCommentsByArticleId(routeParams.article_id)
        setCommentLoading(false)
        setComments(comments)
        
    }
    useEffect(() => {
        commentViewer()
    }, [])

    return commentLoading ? <h2>Loading...</h2> : (
        <section className="comments-section">
            <h2>COMMENTS</h2>
            <div className='user-welcome'>
                
                <p>You are logged in as: {user.username} </p>
                <img className='avatar' src={user.avatar_url}/>
                

            </div>
            <PostComments user={user} setComments={setComments} comments={comments} routeParams={routeParams}/>
            <ul className="comment-list">
                {comments.map((comment) => {
                    const timestamp = comment.created_at
                    const date = new Date(timestamp)
                    const options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
                    const formattedDate = date.toLocaleDateString('en-GB', options)
                    return (
                        <div key={comment.comment_id}>
                            <li className="comment-item" >
                            <p>Posted at: {formattedDate}</p>
                                <p>#{comment.comment_id}</p>
                                <p>Posted By: {comment.author}</p>
                                <p className="comment-body">{comment.body}</p>
                                
                                <p>VOTES: {comment.votes}</p>
                                
                            </li>
                        </div>
                        
                    )
                    
                })}
            </ul>
        </section>
            
        
    )
}
function PostComments({ user, setComments, routeParams }) {
    const [commentToBePosted, setCommentToBePosted] = useState({ username: "", body: "" });
    const [isPosting, setIsPosting] = useState(false);
    const [postSuccess, setPostSuccess] = useState(false);
    const [postError, setPostError] = useState(null);
  
    const handleCommentButton = async () => {
        
      setIsPosting(true);
      
      
        
      try {
       
        const response = await postComment(routeParams.article_id, {username: user.username, body: commentToBePosted.body});
  
       
        setComments([response.data.comment, ...comments]);
        setPostSuccess(true);
        setPostError(null);
        setIsPosting(false);
      } catch (error) {
        
        setPostSuccess(false);
        setPostError("Error posting comment please try again :(");
      } 
    };
  
    return (
      <div >
        <form className="post-comments-form" onSubmit={handleCommentButton}>
          <label htmlFor="post-comment">
            Comment:
            <textarea
              id="post-comment"
              placeholder="Enter Comment Here"
              name="comment"
              onChange={(e) => {
                e.preventDefault()
                setCommentToBePosted({username: user.username, body: e.target.value})

              }}
              
              
            />
          </label>
          <button className="post-comment-button" type="submit"  disabled={isPosting}>
            {isPosting ? "Posting..." : "Post Comment"}
          </button>
        </form>
  
        {postSuccess && <p>Comment posted successfully!</p>}
        {postError && <p>{postError}</p>}
      </div>
    );
  }
  


export default ViewSingleArticle;