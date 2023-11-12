import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllArticles } from '../../axios';
import { ListArticles } from './AllArticles';
import TopicLinks from '../TopicLinks';

function ArticlesByTopic() {
  const { topic } = useParams();
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const fetchArticlesByTopic = async () => {
      try {
        const { data: { articles } } = await getAllArticles({ topic });
        setArticleList(articles);
      } catch (error) {
        console.error('Error fetching articles by topic:', error);
      }
    };

    fetchArticlesByTopic();
  }, [topic]);

  return (
    <section>
      <h2>{`Articles - ${topic}`}</h2>
      <TopicLinks />
      <ListArticles articleList={articleList} setArticleList={setArticleList}/>
    </section>
  );
}

export default ArticlesByTopic;

