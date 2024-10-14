import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const fetchRandom = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/random");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      navigate(`/define?title=${encodeURIComponent(data.title)}`);
    } catch (error) {
      console.error("Error getting the random word: ", error);
    }
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <h1>
              <Link to="/">tự điền</Link>
            </h1>
          </li>
          <li>
            <Link
              to="#"
              onClick={(e) => {
                fetchRandom();
              }}
            >
              ngẫu nhiên
            </Link>
          </li>
          <li>
            <Link to="/about">giới thiệu</Link>
          </li>
        </ul>
      </nav>
      <nav className="right-nav">
        <input className="search-bar" type="text" placeholder="tra từ.." />
        <Link to="/add" className="add-word-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="currentColor"
            className="add-icon"
          >
            <circle
              cx="24"
              cy="24"
              r="22"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              fillRule="evenodd"
              d="M24 13a1.5 1.5 0 011.5 1.5v8.5h8.5a1.5 1.5 0 010 3h-8.5v8.5a1.5 1.5 0 01-3 0v-8.5h-8.5a1.5 1.5 0 010-3h8.5v-8.5A1.5 1.5 0 0124 13z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
