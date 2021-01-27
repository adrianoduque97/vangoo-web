import "./App.css";
import Navbar from "./Components/Navbar";
import TextLogo from "./Components/TextLogo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <TextLogo />
      </Router>
    </div>
  );
}

export default App;
