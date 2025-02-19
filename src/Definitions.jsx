import React, { useState, useEffect } from "react";
import Word from "./Word";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Definitions = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const title = new URLSearchParams(location.search).get("title");
  const notFound = location.state?.notFound || false;

  useEffect(() => {
    const fetchWords = async () => {
      try {
        if (!notFound) {
          const response = await fetch(
            `http://localhost:8000/api/words/title/${encodeURIComponent(title)}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setWords(data);
        }
      } catch (error) {
        console.error("Error fetching words:", error);
      } finally {
        setLoading(false);
      }
    };
    if (title) {
      fetchWords();
    }
  }, [title, notFound]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-container">
      <Header />
      <div className="flex-wrapper">
        {notFound ? (
          <div className="word">
            <h1
              onClick={() => handleTitleClick(title)}
              style={{ cursor: "pointer" }}
            >
              {title}
            </h1>

            <p>
              mình chưa chính thức định nghĩa từ "{title}", đây là nghĩa tự động
              được AI tìm kiếm!
            </p>
            <button
              className="define-button"
              onClick={() => navigate("/add", { state: { title } })}
            >
              downvote
            </button>
            <button
              className="define-button"
              onClick={() => navigate("/add", { state: { title } })}
            >
              thêm nghĩa
            </button>
          </div>
        ) : (
          words.map((word, index) => <Word key={index} word={word} />)
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Definitions;
