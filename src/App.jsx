import React, { useState, useEffect } from "react";
import Word from "./Word";
import Header from "./Header";
import Footer from "./Footer";
import WordList from "./WordList";
function App() {
  return (
    <div className="main-container">
      <WordList></WordList>
    </div>
  );
}

export default App;
