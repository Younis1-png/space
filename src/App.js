import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./style.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
