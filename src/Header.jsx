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
            <Link to="/">trang chủ</Link>
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
            viewBox="0 0 24 24"
            fill="currentColor"
            className="add-icon"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
