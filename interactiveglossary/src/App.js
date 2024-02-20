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
    new Topics("Object Oriented Programming", "This is some text on OOP"),
  ]);

  const [currentTopic, setCurrentTopic] = useState(0);
  const handleTopicClick = (index) => {
    setCurrentTopic(index);
  };

  return (
    <div className="App">
      {/* side-column here */}
      <div className="concept-container">
        <div className="topic-column">
          <h2>Concepts</h2>
          <hr></hr>
          {topics.map((topic, index) => {
            return (
              <li
                key={index}
                className="button-link-column"
                onClick={() => handleTopicClick(index)}
              >
                {topic.title}
                <hr class="h-line" />
              </li>
            );
          })}
        </div>
      </div>

      {/* main area for concept text */}
      <div className="concept-text">
        <h2>
          Lets explore the concept of: <h1>{topics[currentTopic].title}</h1>
        </h2>
        <p>{topics[currentTopic].topicText}</p>
      </div>
    </div>
  );
}

export default App;
