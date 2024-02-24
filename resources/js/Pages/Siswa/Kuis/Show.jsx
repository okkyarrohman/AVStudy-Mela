// QuizShowSiswa.js

import BtnPrimary from "@/element/button/BtnPrimary";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";
import BtnSecondary from "@/element/button/BtnSecondary";
import Countdown from "react-countdown";
import { Icon } from "@iconify/react";

const QuizShowSiswa = () => {
    const questions = [
        {
            question: "Apa ibukota Indonesia? ",
            options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
            correctAnswer: "Jakarta",
        },
        {
            question: "Berapakah hasil dari 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(
        Array(questions.length).fill("")
    );
    const [score, setScore] = useState(0);
    const [QuizDone, setQuizDone] = useState(false);

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

    const handleCloseQuiz = () => {
        Swal.fire({
            html: `
                <h1 class="text-2xl text-red-500 font-bold mb-3">Keluar</h1>
                <p class="text-sm font-bold">Apakah kamu yakin ingin meninggalkan kuis ?</p>
                <p class="text-sm">Jika tidak periksa kembali jawabanmu</p>
            `,
            confirmButtonColor: "#ef4444",
            confirmButtonText: `Quit`,
            showCloseButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                router.visit("/siswa/kuis");
            }
        });
    }

    const handleNextQuestion = () => {
        if (
            userAnswers[currentQuestion] ===
            questions[currentQuestion].correctAnswer
        ) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizDone(true);
            Swal.fire({
                html: `
                    <h1 class="text-2xl font-bold mb-3">Selesai</h1>
                    <p class="text-sm font-bold">Apakah kamu yakin menyelesaikan  seluruhnya?</p>
                    <p class="text-sm">Jika tidak periksa kembali jawabanmu</p>
                `,
                confirmButtonColor: "#a855f7",
                confirmButtonText: `Submit`,
                showCloseButton: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    router.visit("/siswa/kuis");
                }
            });
        }
    };

    return (
        <>
            <div className="min-h-screen flex flex-col justify-start p-10">
                <div className="flex justify-between">
                    <div className="">
                        <h1 className="font-bold text-2xl">Judul Kuis</h1>
                        <p className="text-sm">
                            Jawab Kuis ini dengan Benar dan Teliti
                        </p>
                    </div>
                    <div className="self-end">
                        <button
                        onClick={()=>handleCloseQuiz()}
                        className="text-4xl text-red-500 hover:text-red-600">
                            <Icon icon="jam:close-rectangle-f"></Icon>
                        </button>
                    </div>
                </div>
                <div className=" w-full ">
                    <div className="flex flex-col p-5 justify-between h-full rounded-xl bg-white shadow-2xl border border-gray-300">
                        <div className="">
                            <div className="flex justify-between">
                                <h2 className="font-bold text-xl">
                                    Pertanyaan {currentQuestion + 1}
                                </h2>
                                <div className="font-bold flex ">
                                    <h1 className="font-bold">Timer : </h1>
                                    <Countdown
                                        date={Date.now() + 60000 * 60}
                                        daysInHours={true}
                                    />
                                </div>
                            </div>
                            <img
                                src="/assets/QuizLogo.svg"
                                className="object-contain w-40"
                            />
                            <p className="my-3">
                                {questions[currentQuestion].question}
                            </p>
                            <form className="flex flex-col mb-5">
                                {questions[currentQuestion].options.map(
                                    (option, index) => (
                                        <label key={index}>
                                            <input
                                                className="m-3"
                                                type="radio"
                                                name="answer"
                                                value={option}
                                                checked={
                                                    userAnswers[
                                                        currentQuestion
                                                    ] === option
                                                }
                                                onChange={handleAnswerChange}
                                            />
                                            {option}
                                        </label>
                                    )
                                )}
                            </form>
                        </div>
                        <div className="w-full flex justify-between ">
                            <BtnSecondary
                                onClick={handlePrevQuestion}
                                text="Prev"
                            />
                            <BtnPrimary
                                onClick={() => handleNextQuestion()}
                                text={
                                    currentQuestion === questions.length - 1
                                        ? "Submit"
                                        : "Next"
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizShowSiswa;
