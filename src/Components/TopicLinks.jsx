
import React from 'react';
import { Link } from 'react-router-dom';


function TopicLinks() {
  return (
    <div className="topic-links">
      <Link className="topic-press" to="/topics/football">Football</Link>
      <Link className="topic-press" to="/topics/coding">Coding</Link>
      <Link className="topic-press" to="/topics/cooking">Cooking</Link>
      
    </div>
  );
}

export default TopicLinks;
