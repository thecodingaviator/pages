import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://workers.hiparthparth7631.workers.dev/posts", {
      method: 'GET'
    })
      .then(res => {console.clear(); console.log(res.json()); return res.json()})
      .then(
        (result) => {
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
        <ul>
          {posts.map(post => (
            <li>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
