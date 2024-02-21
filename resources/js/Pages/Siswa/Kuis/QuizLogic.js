import React, { useState } from 'react';

const questions = [{
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