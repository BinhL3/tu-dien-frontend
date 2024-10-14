import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Word from "./Word";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  const word = {
    title: "Bởi Binh Le",
    definition:
      "Hi mọi người!. Đây là dự án để có 1 từ điển được cập nhật thường xuyên hơn với những tiếng lóng mới nhất của mọi thế hệ người Việt :D",
    example: [
      "Thảo: m biết ck vk là gì ko?",
      "Bảnh: Lên cái từ điển của bình lê đê",
      "Quân: skibidi toilet",
    ],
    author: "Binh Le",
    date: new Date().toString(),
  };
  return (
    <div className="main-container">
      <Header />
      <Word key={1} word={word}></Word>
      <Footer />
    </div>
  );
};

export default About;
