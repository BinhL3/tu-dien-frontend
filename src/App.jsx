import React, { useState, useEffect } from "react";
import Word from "./Word";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/words"); // the get request to fetch all words
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Error fetching words:", error);
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
          setError("Unable to connect to the server. Please check if the server is running.");
        } else if (error.message === "Server didn't return JSON") {
          setError("The server returned an unexpected response. Please check the API endpoint.");
        } else {
          setError(`Failed to fetch words: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="main-container">
      <Header />
      <div className="flex-wrapper">
        {words.map((word, index) => (
          <Word key={index} word={word} />
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default App;
