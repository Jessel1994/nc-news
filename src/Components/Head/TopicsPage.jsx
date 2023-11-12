import React from 'react';
import { Link } from 'react-router-dom';

function TopicsPage() {
  return (
    <div >
      <h2>Topics</h2>
      <div className="topic-links">
        <Link className="topic-press" to="/topics/cooking">Football</Link>
        <Link className="topic-press"  to="/topics/coding">Coding</Link>
        <Link className="topic-press"  to="/topics/cooking">Cooking</Link>
      </div>
    </div>
  );
}

export default TopicsPage;
