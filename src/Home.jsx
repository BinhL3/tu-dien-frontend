import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Word from "./Word";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/words");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Error fetching words:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  });

  const handleTitleClick = (title) => {
    navigate(`/define?title=${encodeURIComponent(title)}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-container">
      <Header />
      <div className="flex-wrapper">
        {words.map((word, index) => (
          <Word key={index} word={word} handleTitleClick={handleTitleClick} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
