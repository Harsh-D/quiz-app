import { useState } from "react";
import { quizOne } from "../../data/getQuiz";

export function QuizBody() {
    const [score, setScore] = useState(0);
    const [currentQueNo, setCurrentQueNo] = useState(1);
    const [isQuizOver, setIsQuizOver] = useState(false);
    return (
        <>
            <h3> Question: {currentQueNo}/{quizOne.totalQuestions} </h3>

            {!isQuizOver && <>
                { quizOne.questions[currentQueNo - 1].question}
                <div className="component-container">
                    <button
                        // style={buttonStyle}
                        className="button primary-button"
                        style={{ width: "100%" }}
                        onClick={() => {
                            quizOne.questions[currentQueNo - 1].options[0].isRight ?
                                setScore((score) => score + quizOne.questions[currentQueNo - 1].points) :
                                setScore((score) => score - quizOne.questions[currentQueNo - 1].negativePoint);
                            currentQueNo===quizOne.totalQuestions?setIsQuizOver(true): setCurrentQueNo((currentQueNo) => currentQueNo + 1);
                        }}
                    >
                        {quizOne.questions[currentQueNo - 1].options[0].text}
                    </button>
                    <br /><br />
                    <button
                        // style={buttonStyle}
                        className="button secondary-button"
                        style={{ width: "100%" }}
                        onClick={() => {
                            quizOne.questions[currentQueNo - 1].options[1].isRight ?
                                setScore((score) => score + quizOne.questions[currentQueNo - 1].points) :
                                setScore((score) => score - quizOne.questions[currentQueNo - 1].negativePoint);
                                currentQueNo===quizOne.totalQuestions?setIsQuizOver(true): setCurrentQueNo((currentQueNo) => currentQueNo + 1);
                        }}
                    >
                        {quizOne.questions[currentQueNo - 1].options[1].text}
                    </button>
                    <br /><br />
                    <button
                        // style={buttonStyle}
                        className="button primary-button"
                        style={{ width: "100%" }}
                        onClick={() => {
                            quizOne.questions[currentQueNo - 1].options[2].isRight ?
                                setScore((score) => score + quizOne.questions[currentQueNo - 1].points) :
                                setScore((score) => score - quizOne.questions[currentQueNo - 1].negativePoint);
                                currentQueNo===quizOne.totalQuestions?setIsQuizOver(true): setCurrentQueNo((currentQueNo) => currentQueNo + 1);
                        }}
                    >
                        {quizOne.questions[currentQueNo - 1].options[2].text}
                    </button>
                    <br /><br />
                    <button
                        // style={buttonStyle}
                        className="button secondary-button"
                        style={{ width: "100%" }}
                        onClick={() => {
                            quizOne.questions[currentQueNo - 1].options[3].isRight ?
                                setScore((score) => score + quizOne.questions[currentQueNo - 1].points) :
                                setScore((score) => score - quizOne.questions[currentQueNo - 1].negativePoint);
                                currentQueNo===quizOne.totalQuestions?setIsQuizOver(true): setCurrentQueNo((currentQueNo) => currentQueNo + 1);
                        }}
                    >
                        {quizOne.questions[currentQueNo - 1].options[3].text}
                    </button>
                </div>
            </>}
            {isQuizOver? `Your score is : ${score}`:null}
            <br/>
            <button
                // style={buttonStyle}
                className="button  secondary-button"
                style={{ position: "relative", bottom: "0rem", right: "0rem" }}
                onClick={() => {
                    setIsQuizOver(false);
                    setScore(0);
                    setCurrentQueNo(1);
                }}
            >
                ↺       
      </button>
        </>
    );
}