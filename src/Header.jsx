import { Link } from "react-router-dom";
function Header() {
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
            <Link to="/random">ngẫu nhiên</Link>
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
