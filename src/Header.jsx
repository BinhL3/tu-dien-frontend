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
            {/* Link that triggers the fetchRandom function when clicked */}
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default link behavior
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
      <input className="search-bar" type="text" placeholder="tra từ.." />
    </header>
  );
}

export default Header;
