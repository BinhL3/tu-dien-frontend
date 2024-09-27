import React, { useState, useEffect } from "react";
import Word from "./Word";
import Header from "./Header";
import Footer from "./Footer";

const WordList = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

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
};

export default WordList;
