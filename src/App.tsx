import "./styles.css";
import { Header } from "./Components/Header/Header";
import { useState } from "react";
import { QuizBody } from "./Components/QuizBody/QuizBody"

// const buttonStyle = {
//   display: "block",
//   textAlign: "center" as const,
//   width: "100%",
//   padding: "1rem",
//   fontSize: "1.2rem"
// };
export default function App() {
  const [userName, setUserName] = useState("user");
  const [userNameModal, showUserNameModal] = useState(true);
  return (
    <div className="App">
      {userNameModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-content">
            <span
              className="close"
              onClick={() => showUserNameModal(false)}
            >
              &times;
                </span>
            <p> 
              NOTE: Consider watching some videos to increase your knowledge about perfumes, click the link below:<br/>
              <a rel="noreferrer" href="https://logn-video.netlify.app/" target="_blank" style={{textDecoration:"none", color:"black"}}>Log<sub>N</sub>Video</a>
            </p>
            <p> Before attempting the quiz, Enter Your name: </p>
            <input
              type="text"
              onChange={(val) => setUserName(val.target.value)}
            />&nbsp;
            <button
              className="button secondary-button"
              onClick={() => showUserNameModal(false)}
            >
              submit
                </button>
          </div>
        </div>
      )}
      <Header username={userName} />
      <QuizBody />
    </div>
  );
}
