import Sidebar from "@/Components/Sidebar/Sidebar";
import BtnPrimary from "@/element/button/BtnPrimary";
import BtnSecondary from "@/element/button/BtnSecondary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { useState } from "react";

const CreateMateri = () => {
    const [step, setStep] = useState(1);
    const handleNext = () => {
        setStep(step + 1);
    };

    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10">
                    <div className="flex items-center">
                        <a href="/guru/proyek" className="text-gray-400">
                            Proyek
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            Tambah Proyek
                        </span>
                    </div>
                    <div className="my-5">
                        <div className="bg-white w-full shadow-xl border rounded-lg border-gray-300 ">
                            <div className="flex justify-between bg-purple-500 text-white p-4 w-full rounded-t-lg">
                                <h1 className=" font-bold">Tambah Proyek</h1>
                            </div>
                            <div className="flex h-4/5 items-center justify-center">
                                <div className="flex flex-col h-full w-full px-5 py-3 m-3">
                                    {step == 1 && (
                                        <>
                                            <div className="my-2">
                                                <label className="font-bold ">
                                                    Nama Proyek *
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="materi_name"
                                                        className="w-full rounded border-gray-400 mt-3"
                                                        placeholder="Masukkan Nama Proyek"
                                                    />
                                                </div>
                                            </div>
                                            <div className="my-2">
                                                <label className="font-bold ">
                                                    Tenggat *
                                                </label>
                                                <div>
                                                    <input
                                                        type="date"
                                                        name="materi_name"
                                                        className="w-full rounded border-gray-400 mt-3"
                                                        placeholder="Masukkan Tenggat Proyek"
                                                    />
                                                </div>
                                            </div>
                                            <div className="my-2">
                                                <label className="font-bold ">
                                                    Langkah 1 *
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="materi_name"
                                                        className="w-full rounded border-gray-400 mt-3"
                                                        placeholder="Masukkan Nama Langkah"
                                                    />
                                                </div>
                                            </div>
                                            <div className="my-2">
                                                <label className="font-bold">
                                                    Deskripsi Proyek *
                                                </label>
                                                <div>
                                                    <textarea
                                                        type="text"
                                                        name="materi_desc"
                                                        className="w-full rounded border-gray-400 mt-3"
                                                        placeholder="Masukkan Deskripsi Singkat Proyek"
                                                        rows={5}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {step > 1 && step <= 4 && (
                                        <>
                                            <div className="my-2">
                                                <label className="font-bold ">
                                                    Langkah {step} *
                                                </label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="materi_name"
                                                        className="w-full rounded border-gray-400 mt-3"
                                                        placeholder="Masukkan Nama Langkah"
                                                    />
                                                </div>
                                            </div>
                                            <div className="my-2">
                                                <label className="font-bold">
                                                    Deskripsi Langkah {step} *
                                                </label>
                                                <div>
                                                    <textarea
                                                        type="text"
                                                        name="materi_desc"
                                                        className="w-full rounded border-gray-400 mt-3"
                                                        placeholder="Masukkan Deskripsi Singkat "
                                                        rows={5}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="flex justify-end">
                                        <div className="flex gap-5">
                                            <BtnSecondary
                                                onClick={() =>
                                                    router.visit("/guru/proyek")
                                                }
                                                text="Tutup"
                                            />
                                            <BtnPrimary
                                                onClick={
                                                    step == 4
                                                        ? () =>
                                                              router.visit(
                                                                  "/guru/proyek"
                                                              )
                                                        : () => handleNext()
                                                }
                                                className="text-lg"
                                                text={
                                                    step == 4
                                                        ? "Submit"
                                                        : "Next"
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateMateri;
