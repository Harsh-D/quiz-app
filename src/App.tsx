import "./styles.css";
import { quizOne } from "./data/getQuiz";
import { Header } from "./Components//Header/Header";
import { useState } from "react";

// const buttonStyle = {
//   display: "block",
//   textAlign: "center" as const,
//   width: "100%",
//   padding: "1rem",
//   fontSize: "1.2rem"
// };
export default function App() {
  const [score, setScore] = useState(0);
  const [currentQueNo, setCurrentQueNo] = useState(1);

  return (
    <div className="App">
      <Header username={"Harsh"} score={score} />
      <h3> Question: {currentQueNo}/{quizOne.totalQuestions} </h3>
      {quizOne.questions[currentQueNo - 1].question}     
      <div className="component-container">
      <button
        // style={buttonStyle}
        className="button primary-button"
        style={{width:"100%"}}
        onClick={() => {
          setScore((score) => score + 1);
          setCurrentQueNo((currentQueNo) => currentQueNo + 1);
        }}
      >
        {quizOne.questions[currentQueNo - 1].options[0].text}
      </button>
      <br/><br/>
      <button
        // style={buttonStyle}
        className="button secondary-button"
        style={{width:"100%"}}
        onClick={() => {
          setScore((score) => score - 1);
          setCurrentQueNo((currentQueNo) => currentQueNo + 1);
        }}
      >
        {quizOne.questions[currentQueNo - 1].options[1].text}
      </button>
      <br/><br/>
      <button
        // style={buttonStyle}
        className="button primary-button"
        style={{width:"100%"}}
        onClick={() => {
          setScore((score) => score + 1);
          setCurrentQueNo((currentQueNo) => currentQueNo + 1);
        }}
      >
        {quizOne.questions[currentQueNo - 1].options[2].text}
      </button>
      <br/><br/>
      <button
        // style={buttonStyle}
        className="button secondary-button"
        style={{width:"100%"}}
        onClick={() => {
          setScore((score) => score - 1);
          setCurrentQueNo((currentQueNo) => currentQueNo + 1);
        }}
      >
        {quizOne.questions[currentQueNo - 1].options[3].text}
      </button>
      </div>
      
      
      <button
        // style={buttonStyle}
        className="button  secondary-button"
        style={{position:"relative", bottom:"0rem", right:"0rem"}}
        onClick={() => {
          setScore(0);
          setCurrentQueNo(1);
        }}
      >
        ⭯
      </button>
    </div>
  );
}
