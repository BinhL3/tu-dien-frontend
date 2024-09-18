import Word from "./Word"
import Header from "./Header"
import Footer from "./Footer";
function App() {

  const word = {
    title:"Ảo đét",
    definition:"Ảo đét là từ nhấn mạnh sự bất ngờ.",
    example:["Tiến: Hôm qua tao khoanh lụi hết mà cũng được 9.5.", "Quân: Đúng là ảo đét."],
    author: "Binh Le",
    date: "12/8/2024"
  };

  const word2 = {
    title:"Chỉn chu",
    definition:"Chỉ một thứ được làm trọn vẹn, đạt mức hài lòng và thường bị nhầm thành với chỉnh chủ.",
    example:["Thắng: làm bài nhóm cho chỉnh chu vào không t mách cô đấy.", "Quang: chỉn chu chứ...."],
    author: "Binh Le",
    date: "12/8/2024"
  };

  return (
    <div className="main-container">
      <Header/>
      <div className="flex-wrapper">
        <Word word={word}/>
        <Word word={word2}/>
        <Word word={word}/>

        <Footer/>
      </div>
    </div>
  )
}

export default App;