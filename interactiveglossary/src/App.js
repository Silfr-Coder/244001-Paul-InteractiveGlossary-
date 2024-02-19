import logo from "./logo.svg";
import "./App.css";
import Buttons from "./Components/Buttons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="button-links">
          Links will appear here
          <Buttons />
        </div>
        <div className="concept-text">Concept text will appear here</div>
      </header>
    </div>
  );
}

export default App;
