import React, { useState, useEffect } from 'react';

function App() {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState('');

  const apiKey = '3f388d99e9a249a9bb7f66f6dee60dc1';

  const fetchNewsData = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data.articles); 
      })
      .catch((error) => {
        setError('An error occurred while fetching news data.');
      });
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Top Headlines</h1>
      <h1 className="text-2xl font-bold">Stay here</h1>
      <div>
        <ul>
          {newsData.length > 0 ? (
            newsData.map((update, index) => (
              <li key={index} className="mb-4">
                <h2 className="text-xl font-semibold">{update.title}</h2>
                <p className="text-gray-700">{update.description}</p>
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}

export default App;