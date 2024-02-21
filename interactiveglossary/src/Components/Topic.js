import variablesImage from "../Images/variablesImage.jpeg";
import functionsImage from "../Images/functionsImage.png";
class Topic {
  constructor(title, topicText, image, question) {
    this.title = title;
    this.topicText = topicText;
    this.image = image;
    this.question = question;
  }
}

const variables = new Topic(
  "Variables",
  "This is some text about Variables...",
  variablesImage,
  "What is a variable?"
);
const functions = new Topic(
  "Functions",
  "This is some text on Functions.",
  functionsImage,
  "What is a Function?"
);
const controlStructures = new Topic(
  "Control Structures",
  "This is some text on Control Structures",
  "What are Control Structures?"
);
const dataTypes = new Topic("Data Types", "Here is some text on Data Types");
const conditionalStatements = new Topic(
  "Conditional Statements",
  "Here is some text on Conditional Statements"
);
const loops = new Topic("Loops", "Here is some text on Loops");
const classes = new Topic("Classes", "This is some text about Classes...");
const inheritance = new Topic(
  "Inheritance",
  "Here's some text on Inheritance..."
);
const arrays = new Topic("Arrays", "Here's some text about Arrays");
const objects = new Topic("Objects", "This is some text on Objects");

let topicList = [
  variables,
  functions,
  controlStructures,
  dataTypes,
  conditionalStatements,
  loops,
  classes,
  inheritance,
];
export default topicList;
