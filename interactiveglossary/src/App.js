import { useState } from "react";
import "./Components/InteractiveGlossaryStyles.css";
import Topics from "./Components/Topics";
import variablesImage from "./Images/variablesImage.jpeg";
import functionsImage from "./Images/functionsImage.png";

function App() {
  const [topics, setTopics] = useState([
    new Topics(
      "Variables",
      "This is some text about Variables...",
      variablesImage
    ),
    new Topics("Functions", "This is some text on Functions.", functionsImage),
    new Topics("Control Structures", "This is some text on Control Structures"),
    new Topics("Data Types", "Here is some text on Data Types"),
    new Topics(
      "Conditional Statements",
      "Here is some text on Conditional Statements"
    ),
    new Topics("Loops", "Here is some text on Loops"),
    new Topics("Classes", "This is some text about Classes..."),
    new Topics("Inheritance", "Here's some text on Inheritance..."),
    new Topics("Arrays", "Here's some text about Arrays"),
    new Topics("Objects", "This is some text on Objects"),
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
          {/* include index to allow map to loop through and pass current topic to
          handle click event */}
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
        <img src={topics[currentTopic].image} width={700} />
      </div>
    </div>
  );
}

export default App;
