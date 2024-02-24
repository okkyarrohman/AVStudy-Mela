// QuizShowSiswa.js

import BtnPrimary from "@/element/button/BtnPrimary";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";
import BtnSecondary from "@/element/button/BtnSecondary";
import { usePage } from "@inertiajs/react";

import Countdown from "react-countdown";
import { Icon } from "@iconify/react";
import KuisSection from "@/Components/KuisSection/KuisSection";

const QuizShowSiswa = ({ kuis, soal }) => {

    const [isDone, setIsDone ] = useState()

    const setIsDonetrue = () =>{
        console.log("taekk")
        setIsDone(true)
    }

    return (
        <>
            <div className="min-h-screen flex flex-col justify-start p-10">
                <div className="flex justify-between">
                    <div className="">
                        <h1 className="font-bold text-2xl">Judul Kuis </h1>
                        <p className="text-sm">
                            Jawab Kuis ini dengan Benar dan Teliti
                        </p>
                    </div>
                    <div className="self-end flex flex-col items-end">
                        <button
                            onClick={() => handleCloseQuiz()}
                            className="text-4xl text-end text-red-500 hover:text-red-600"
                        >
                            <Icon icon="jam:close-rectangle-f"></Icon>
                        </button>
                        <div className="font-bold flex ">
                            <h1 className="font-bold">Timer : </h1>
                            <Countdown
                                date={Date.now() + 10000 * 1}
                                daysInHours={true}
                                onComplete={()=>setIsDonetrue()}
                            />
                        </div>
                    </div>
                </div>
                <KuisSection kuis={kuis} done={isDone} soal={soal} />
            </div>
        </>
    );
};

export default QuizShowSiswa;
