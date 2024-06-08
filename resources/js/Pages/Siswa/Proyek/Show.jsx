import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router, useForm } from "@inertiajs/react";
import BtnPrimary from "@/element/button/BtnPrimary";
import { useFormik } from "formik";
import BtnSecondary from "@/element/button/BtnSecondary";

const ShowProyek = ({ proyeks, proyekResults }) => {
    console.log(proyeks);
    console.log(proyekResults);

    const stepIndex = localStorage.getItem("STEP_PROYEK");

    const [idx, setIdx] = useState(parseInt(stepIndex));
    const [step, setStep] = useState(`step${idx}`);
    const [desc, setDesc] = useState(`deskripsi${idx}`);
    const [answer, setAnswer] = useState(`answer${idx}`);

    const formik = useFormik({
        initialValues: {
            answer1: proyekResults?.answer1 || null,
            answer2: proyekResults?.answer2 || null,
            answer3: proyekResults?.answer3 || null,
            answer4: proyekResults?.answer4 || null,
            answer_note: proyekResults?.answer_note || "",
            answer_link: proyekResults?.answer_link || "",
        },
        onSubmit: (values) => {
            const data = {
                _method: proyekResults ? "PATCH" : "POST",
                proyek_id: proyeks.id,
                answer1: values.answer1,
                answer2: values.answer2,
                answer3: values.answer3,
                answer4: values.answer4,
                answer_note: proyekResults?.answer_note,
                answer_link: proyekResults?.answer_link,
            };

            console.log(data);
            router.post(
                proyekResults
                    ? `/siswa/proyek/${proyekResults.id}`
                    : `/siswa/proyek`,
                data
            );
        },
    });

    const nextHandler = () => {
        setIdx(idx + 1);
    };

    const prevHandler = () => {
        setIdx(idx - 1);
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
                            <Link
                                href="/siswa/proyek"
                                className="text-gray-400"
                            >
                                Proyek
                            </Link>
                            <Icon
                                className="text-xs mx-3 text-gray-400"
                                icon="ep:arrow-right-bold"
                            ></Icon>
                            <span className="font-bold text-black">
                                {proyeks.nama}
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
                                    <label className="w-fit flex items-center font-bold py-10 my-1 px-72 text-black border-black border border-dashed rounded-lg">
                                        <Icon
                                            icon="tabler:plus"
                                            className="me-2"
                                        ></Icon>
                                        <input
                                            name="answer1"
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => {
                                                formik.setFieldValue(
                                                    "answer1",
                                                    e.target.files[0]
                                                );
                                            }}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.values.answer1
                                            ? formik.values.answer1.name
                                                ? formik.values.answer1.name
                                                : formik.values.answer1
                                            : "Pilih File"}
                                    </label>
                                )}
                                {idx == 2 && (
                                    <label className="w-fit flex items-center font-bold py-10 my-1 px-72 text-black border-black border border-dashed rounded-lg">
                                        <Icon
                                            icon="tabler:plus"
                                            className="me-2"
                                        ></Icon>
                                        <input
                                            name="answer2"
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => {
                                                formik.setFieldValue(
                                                    "answer2",
                                                    e.target.files[0]
                                                );
                                            }}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.values.answer2
                                            ? formik.values.answer2.name
                                                ? formik.values.answer2.name
                                                : formik.values.answer2
                                            : "Pilih File"}
                                    </label>
                                )}
                                {idx == 3 && (
                                    <label className="w-fit flex items-center font-bold py-10 my-1 px-72 text-black border-black border border-dashed rounded-lg">
                                        <Icon
                                            icon="tabler:plus"
                                            className="me-2"
                                        ></Icon>
                                        <input
                                            name="answer3"
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => {
                                                formik.setFieldValue(
                                                    "answer3",
                                                    e.target.files[0]
                                                );
                                            }}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.values.answer3
                                            ? formik.values.answer3.name
                                                ? formik.values.answer3.name
                                                : formik.values.answer3
                                            : "Pilih File"}
                                    </label>
                                )}
                                {idx == 4 && (
                                    <label className="w-fit flex items-center font-bold py-10 my-1 px-72 text-black border-black border border-dashed rounded-lg">
                                        <Icon
                                            icon="tabler:plus"
                                            className="me-2"
                                        ></Icon>
                                        <input
                                            name="answer4"
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => {
                                                formik.setFieldValue(
                                                    "answer4",
                                                    e.target.files[0]
                                                );
                                            }}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.values.answer4
                                            ? formik.values.answer4.name
                                                ? formik.values.answer4.name
                                                : formik.values.answer4
                                            : "Pilih File"}
                                    </label>
                                )}
                            </form>
                            <div className="flex justify-between w-[50rem]">
                                {/* <div className="flex items-center gap-6">
                                    {idx != 1 && (
                                        <BtnSecondary
                                            onClick={prevHandler}
                                            text="Prev"
                                        />
                                    )}
                                    {idx != 4 && (
                                        <BtnPrimary
                                            onClick={nextHandler}
                                            text="Next"
                                        />
                                    )}
                                </div> */}
                                <BtnPrimary
                                    onClick={() => formik.handleSubmit()}
                                    text="Submit"
                                    className="mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowProyek;
