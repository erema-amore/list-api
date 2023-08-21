import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Container } from '@material-ui/core';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <Container>
      {articles.map(article => (
        <Card key={article.id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h6">{article.title}</Typography>
            <Typography>{article.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default ArticleList;
