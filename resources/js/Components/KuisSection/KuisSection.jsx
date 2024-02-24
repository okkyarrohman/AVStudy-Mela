// QuizShowSiswa.js

import BtnPrimary from "@/element/button/BtnPrimary";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";
import BtnSecondary from "@/element/button/BtnSecondary";
import { usePage } from "@inertiajs/react";

import Countdown from "react-countdown";
import { Icon } from "@iconify/react";

const KuisSection = ({ kuis, soal, done }) => {
    console.log(kuis);
    console.log(soal);
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

    const quest = soal;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(
        Array(questions.length).fill("")
    );
    const [score, setScore] = useState(0);
    const [QuizDone, setQuizDone] = useState(done);

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
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizDone(true);
            finish()
        }
    };

    const finish = () =>{
        Swal.fire({
            html: `
                <h1 class="text-2xl font-bold mb-3">${done?"WAKTU HABIS":"Selesai"}</h1>
                <p class="text-sm font-bold">${done?"yhaa belum selesai nangis lha kaooo ckckck":'Apakah kamu yakin menyelesaikan seluruhnya?'}</p>
               ${done?"": '<p class="text-sm">Jika tidak periksa kembali jawabanmu</p>'
            }`,
            confirmButtonColor: done?"#ef4444":"#a855f7",
            confirmButtonText: done?"Keluar":"Submit",
            showCloseButton: done?false:true,
            allowOutsideClick: done?false:true,
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("ini Jawaban User",userAnswers);
                //ikilo kik anjrit datae bentuk e piye
                router.post(route("kuis.store", { userAnswers }));
            }
        });
    }

    useEffect(()=>{
        if(done)
        finish()
    },[done])

    return (
        <>
            <div className=" w-full ">
                <div className="flex flex-col p-5 justify-between h-full rounded-xl bg-white shadow-2xl border border-gray-300">
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="font-bold text-xl">
                                Pertanyaan {currentQuestion + 1}
                            </h2>
                        </div>
                        <img
                            src="/assets/QuizLogo.svg"
                            className="object-contain w-40"
                        />
                        <p className="my-3">{quest[currentQuestion].soal}</p>
                        <form className="flex flex-col mb-5">
                            {quest[currentQuestion].opsi.map(
                                (option, index) => (
                                    <label key={index}>
                                        <input
                                            className="m-3"
                                            type="radio"
                                            name="answer"
                                            value={option.opsi}
                                            checked={
                                                userAnswers[currentQuestion] ===
                                                option.opsi
                                            }
                                            onChange={handleAnswerChange}
                                        />
                                        {option.opsi}
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
        </>
    );
};

export default KuisSection;
