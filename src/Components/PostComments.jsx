import { useState } from "react";
import { postComment } from "../axios";

export function PostComments({ user, setComments, routeParams }) {
  const [commentToBePosted, setCommentToBePosted] = useState({
    username: "",
    body: "",
  });
  const [isPosting, setIsPosting] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);
  const [postError, setPostError] = useState(null);

  const handleCommentButton = async () => {
    setIsPosting(true);

    try {
      const response = await postComment(routeParams.article_id, {
        username: user.username,
        body: commentToBePosted.body,
      });

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
    <div>
      <form className="post-comments-form" onSubmit={handleCommentButton}>
        <label htmlFor="post-comment">
          Comment:
          <textarea
            id="post-comment"
            placeholder="Enter Comment Here"
            onChange={(e) => {
              e.preventDefault();
              setCommentToBePosted({
                username: user.username,
                body: e.target.value,
              });
            }}
          />
        </label>
        <button
          className="post-comment-button"
          type="submit"
          disabled={isPosting}
        >
          {isPosting ? "Posting..." : "Post Comment"}
        </button>
      </form>

      {postSuccess && <p>Comment posted successfully!</p>}
      {postError && <p>{postError}</p>}
    </div>
  );
}
