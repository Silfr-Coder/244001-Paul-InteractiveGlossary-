import { useState } from "react";
import "./Components/InteractiveGlossaryStyles.css";
import Topic from "./Components/Topic";
import topicList from "./Components/Topic";

function App() {
  const [topics, setTopics] = useState(topicList);
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
        {/* <img src={variablesImage} width={700} /> */}
        <p>Question: {topics[currentTopic].question}</p>
      </div>
    </div>
  );
}

export default App;
