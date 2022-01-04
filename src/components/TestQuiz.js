import React, { useState } from "react";
import TestButton from "./TestButton";

const TestQuiz = () => {
// //   const [list, setList] = useState("");
//   const list = ["Question 1  {question": "What is 1+1?"} , Question 2"];
const [questions, setQuestions] = useState( [
    {
        question: 'What kind of test runs the entire workflow of the app?',
        answerOptions: [
            { answer: 'unit test', isCorrect: false },
            { answer: 'integration test', isCorrect: false },
            { answer: 'end to end test', isCorrect: true },
            { answer: 'functional test', isCorrect: false },
        ],
    },
    {
        question: 'Why should we setup tests?',
        answerOptions: [
            { answer: 'reduce manual testing', isCorrect: false },
            { answer: 'catch defects early', isCorrect: false },
            { answer: 'debug faster', isCorrect: false },
            { answer: 'All of the above', isCorrect: true },
        ],
    },
    {
        question: 'Which one is not a test framework?',
        answerOptions: [
            { answer: 'React Testing Library', isCorrect: true },
            { answer: 'Jest', isCorrect: false },
            { answer: 'Nightmare', isCorrect: false },
            { answer: 'Sinon', isCorrect: false },
        ],
    },
    {
        question: 'What does Allata mean?',
        answerOptions: [
            { answer: '1', isCorrect: false },
            { answer: '4', isCorrect: false },
            { answer: '6', isCorrect: false },
            { answer: '7', isCorrect: true },
        ],
    },
])

const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);

const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
        setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
};
console.log(questions.length)
  return (
    <div>
      <h2> </h2>

      <div className="question">
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].question}</div>
      <div>
      {questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answer}</button>
						))}</div>
                        <TestButton score={score} questions={questions}/>
    </div>
  );
};
export default TestQuiz;