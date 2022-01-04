import React, { useState } from "react";

const TestButton = ({score, questions}) => {
console.log(questions)
    const [message, setMessage] = useState("Finish");
  const finishQuiz = () => {
    setMessage(score + "/" + questions.length);
  };
  return (
    <div>
      <button className="button1" onClick={finishQuiz}>
        {message}
      </button>
    </div>
  );
};
export default TestButton;
