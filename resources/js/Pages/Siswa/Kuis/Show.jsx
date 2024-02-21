// QuizShowSiswa.js

import React, { useState } from 'react';

const QuizShowSiswa = () => {
  const questions = [
    {
      question: 'Apa ibukota Indonesia?',
      options: ['Jakarta', 'Bandung', 'Surabaya', 'Medan'],
      correctAnswer: 'Jakarta'
    },
    {
      question: 'Berapakah hasil dari 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4'
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerChange = (event) => {
    const selectedAnswer = event.target.value;
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextQuestion = () => {
    if (userAnswers[currentQuestion] === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(questions.length).fill(''));
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className=''>
      {showResult ? (
        <div>
          <h1>Hasil Quiz</h1>
          <p>Skor Anda: {score} dari {questions.length}</p>
          <button onClick={resetQuiz}>Ulang Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Pertanyaan {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={userAnswers[currentQuestion] === option}
                  onChange={handleAnswerChange}
                />
                {option}
              </label>
            ))}
          </form>
          <button onClick={handlePrevQuestion}>Sebelumnya</button>
          <button onClick={handleNextQuestion}>Selanjutnya</button>
        </div>
      )}
    </div>
  );
};

export default QuizShowSiswa;
