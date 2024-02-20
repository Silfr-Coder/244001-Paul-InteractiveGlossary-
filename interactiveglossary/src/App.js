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
    new Topics("Class", "This is some text on Classes"),
  ]);

  const [currentTopic, setCurrentTopic] = useState(0);

  return (
    <div className="App">
      <div className="concept-container">
        <div className="topic-column">
          <h2>Concepts</h2>
          <hr></hr>
          {topics.map((topic) => {
            return (
              <li className="button-link-column">
                {topic.title}
                <hr class="h-line" />
              </li>
            );
          })}
        </div>
      </div>
      <div className="concept-text">
        <h1>Lets explore the concept of: {topics[currentTopic].title}</h1>
        <h1>{topics[currentTopic].topicText}</h1>
      </div>
    </div>
  );
}

export default App;
