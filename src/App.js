import './App.css';
import { useState, useEffect } from 'react';
import Card from './Card.js';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://workers.hiparthparth7631.workers.dev/posts", {
      method: 'GET'
    })
      .then(res => { console.clear(); return res.json() })
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setPosts(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <h1>Parth's CloudFlare Based Social Media Platform</h1>
        {posts.map(post => (
          <Card title={post.title} username={post.username} content={post.content} />
        ))}
      </div>
    );
  }
}

export default App;
