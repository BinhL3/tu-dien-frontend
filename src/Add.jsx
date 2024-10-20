import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Add = () => {
  const [title, setTitle] = useState("");
  const [definition, setDefinition] = useState("");
  const [example, setExample] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Đã thêm từ thành công!");
    setTitle("");
    setDefinition("");
    setExample("");
  };

  return (
    <div className="main-container">
      <Header />
      <div className="add-word-container">
        <h2>Thêm từ mới</h2>
        <form className="add-word-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Từ"
            className="add-word-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Điền nghĩa vào đây"
            className="add-word-input"
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
            rows="4"
            required
          />
          <textarea
            placeholder="Cho 1 ví dụ của cuộc hội thoại giữa các nhân vật"
            className="add-word-input"
            value={example}
            onChange={(e) => setExample(e.target.value)}
            rows="4"
          />
          <button type="submit" className="define-button">
            Định nghĩa!
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Add;
