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

  return (
    <div className="main-container">
      <Header/>
      <div className="flex-wrapper">
        <Word word={word}/>
        <Word word={word}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;