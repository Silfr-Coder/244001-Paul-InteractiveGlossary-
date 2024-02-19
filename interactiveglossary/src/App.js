import { useState } from "react";
import Buttons from "./Components/Buttons";
import "./Components/InteractiveGlossaryStyles.css";
import Topics from "./Components/Topics";

function App() {
  const [topics, setTopics] = useState([
    new Topics("Variables", "This is some text about Variables..."),
    new Topics("Classes", "This is some text about Classes..."),
    new Topics("Props", "Here's some text on props"),
    new Topics("Functional components", "Here's some text about "),
  ]);

  const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {topics.map(() => {
          return (
            <div className="button-link-column">
              {topics[currentTopic].title}
            </div>
          );
        })}
        {/* <div className="button-link-column">
          <h2>{topics[currentTopic].title}</h2>
        </div> */}

        <div className="concept-text">
          <h1>Lets explore the concept of: {topics[currentTopic].title}</h1>
          <h1>{topics[currentTopic].topicText}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
