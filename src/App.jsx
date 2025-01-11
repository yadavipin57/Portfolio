import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="App sm:w-full h-screen text-white scroll-smooth">
      <Header />
      <Body />
    </div>
  );
}

export default App;
