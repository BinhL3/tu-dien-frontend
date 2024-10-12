import React, { useState, useEffect } from "react";
import Word from "./Word";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Definitions = () => {
  const [words, setWords] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const getQueryParam = (param) => {
    return new URLSearchParams(location.search).get(param);
  };

  const title = getQueryParam("title");
  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/words/title/${encodeURIComponent(title)}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Error fetching words:", error);
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

export default Definitions;
