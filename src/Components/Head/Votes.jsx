
import { useEffect, useState } from "react";
import { votingOnArticles } from "../../axios";
import { useParams } from "react-router-dom";

function Votes(props) {
  const routeParams = useParams();
  const [votesDiff, setVotesDiff] = useState(0);
  const [error, setError] = useState(null); 

  const updateVotes = (value) => {
    setVotesDiff((currentVotes) => {
      return currentVotes + value;
    });
  };

  useEffect(() => {
    // Reset the error state
    setError(null);

    const fetchData = async () => {
      try {
        
        await votingOnArticles(props.article_id, votesDiff);
      } catch (error) {
        
        setError(error);
      }
    };

    fetchData();
  }, [votesDiff, props.article_id]);

  const validVotes = typeof props.votes === 'number' ? props.votes : 0;

  return (
    <div className="votes">
      <h3>Votes</h3>
      <h4>{validVotes + votesDiff}</h4>

      <button
        disabled={votesDiff === 1}
        className="button"
        onClick={() => {
          updateVotes(1);
        }}
      >
        +
      </button>
      <button
        disabled={votesDiff === -1}
        className="button"
        onClick={() => {
          updateVotes(-1);
        }}
      >
        -
      </button>

      
      {error && <div className="error">{error.message}</div>}
    </div>
  );
}

export default Votes;