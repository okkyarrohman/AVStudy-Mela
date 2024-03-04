import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { router, useForm } from "@inertiajs/react";
import BtnPrimary from "@/element/button/BtnPrimary";

const ShowProyek = ({ proyeks }) => {
    console.log(proyeks);

    const [idx, setIdx] = useState(1);
    const [step, setStep] = useState(`step${idx}`);
    const [desc, setDesc] = useState(`deskripsi${idx}`);
    const [answer, setAnswer] = useState(`answer${idx}`);

    const { data, setData, reset } = useForm({
        id: proyeks.id,
        answer1: null,
        answer2: null,
        answer3: null,
        answer4: null,
    });

    const submitHandler = async (e) => {
        e.preventDefault();


        console.log(data);
    };

    const nextHandler = () => {
        setIdx(idx + 1);
    };

    useEffect(() => {
        setStep(`step${idx}`);
        setDesc(`deskripsi${idx}`);
        setAnswer(`answer${idx}`);
    }, [idx]);

    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10 flex flex-col gap-5">
                    <div className="my-5">
                        <div className="flex items-center">
                            <a href="/siswa/proyek" className="text-gray-400">
                                proyek
                            </a>
                            <Icon
                                className="text-xs mx-3 text-gray-400"
                                icon="ep:arrow-right-bold"
                            ></Icon>
                            <span className="font-bold text-black">
                                {" "}
                                {proyeks.nama}{" "}
                            </span>
                            <Icon
                                className="text-xs mx-3 text-gray-400"
                                icon="ep:arrow-right-bold"
                            ></Icon>
                            <span className="font-bold text-black">
                                Langkah {idx}
                            </span>
                        </div>
                        <h1 className="font-bold text-2xl">Kuis</h1>
                        <h1 className="text-purple-500 italic font-bold">
                            {" "}
                            Deadline : {proyeks.tenggat}
                        </h1>
                    </div>
                    <div className="grid grid-cols-12 gap-10">
                        <div className="col-span-12 flex flex-col items-center">
                            <h1 className="text-xl font-bold">Langkah {idx}</h1>
                            <p className="font-bold">{proyeks[step]}</p>
                        </div>
                        <div className="col-span-12 flex flex-col items-center gap-10">
                            <p>{proyeks[desc]}</p>
                            <form>
                                {idx == 1 && (
                                    <input
                                        type="file"
                                        name="answer1"
                                        onChange={(e) =>
                                            setData("answer1", e.target.files[0])
                                        }
                                    />
                                )}
                                {idx == 2 && (
                                    <input
                                        type="file"
                                        name="answer2"
                                        onChange={(e) =>
                                            setData("answer2", e.target.files[0])
                                        }
                                    />
                                )}
                                {idx == 3 && (
                                    <input
                                        type="file"
                                        name="answer3"
                                        onChange={(e) =>
                                            setData("answer3", e.target.files[0])
                                        }
                                    />
                                )}
                                {idx == 4 && (
                                    <input
                                        type="text"
                                        name="answer4"
                                        onChange={(e) =>
                                            setData("answer4", e.target.value)
                                        }
                                    />
                                )}
                            </form>
                            <BtnPrimary
                                onClick={
                                    idx == 4
                                        ? (e) => submitHandler(e)
                                        : () => nextHandler()
                                }
                                text={idx == 4 ? "Submit" : "Next"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowProyek;
