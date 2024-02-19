import { useState } from "react";
import Buttons from "./Components/Buttons";
import "./Components/InteractiveGlossaryStyles.css";
import Topics from "./Components/Topics";

function App() {
  const [currentTopic, setCurrentTopic] = useState([]);

  const [topic, setTopic] = useState([
    new Topics("React", "This is some text about React..."),
    new Topics("JSX", "This is some text about JSX..."),
    new Topics(
      "Functional Components",
      "Here's some text on functional components"
    ),
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="button-link-column">
          Click on a links for text
          <button onClick={( => )}
          className="button-link">React</button>
          <button className="button-link">JSX</button>
          <button className="button-link">Functional Components</button>
          <button className="button-link">State</button>
          <Buttons />
        </div>
        <div className="concept-text">
          <h1>Lets explore the concept of: {topic[0].title}</h1>
          <h1>{topic[0].topicText}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
