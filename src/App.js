import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home/Home";
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home></Home>
      </div>
    </BrowserRouter>
  );
}

export default App;
