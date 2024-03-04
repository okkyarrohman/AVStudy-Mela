import Sidebar from "@/Components/Sidebar/Sidebar";
import BtnPrimary from "@/element/button/BtnPrimary";
import BtnSecondary from "@/element/button/BtnSecondary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";

const CreateSoal = () => {
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 mx-5 my-10">
                    <div className="flex items-center mb-5">
                        <span className="text-gray-400">
                            Kuis
                        </span>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <a href="/guru/kuis/soal" className="text-gray-400">
                            Soal
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            Tambah Soal
                        </span>
                    </div>
                    <div className="my-5">
                        <div className="bg-white w-full shadow-xl border rounded-lg border-gray-300 ">
                            <div className="flex justify-between bg-purple-500 text-white p-4 w-full rounded-t-lg">
                                <h1 className=" font-bold">Tambah Soal</h1>
                            </div>
                            <div className="flex h-4/5 items-center justify-center">
                                <div className="flex flex-col h-full w-full px-5 py-3 m-3">
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Kategori Kuis *
                                        </label>
                                        <div>
                                            <select
                                                name="materi_name"
                                                className="w-full rounded border-gray-400 mt-3 bg-white"
                                                placeholder="Masukkan Kategori Kuis"
                                            >
                                                <option value={""} disabled selected hidden>Pilih Kategori</option>
                                                <option value={"apa ya"}>apa tod</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Pertanyaan *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="materi_name"
                                                className="w-full rounded border-gray-400 mt-3"
                                                placeholder="Masukkan Pertanyaan"
                                            />
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <p className="font-bold mb-3">
                                            Gambar (Opsional)
                                        </p>
                                        <label className="w-[15%] flex justify-center items-center font-bold py-2 my-1  text-black border-black border border-dashed rounded-lg">
                                            <Icon
                                                icon="tabler:plus"
                                                className="me-2"
                                            ></Icon>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => ""}
                                            />
                                            Pilih File
                                        </label>
                                    </div>

                                    <div className="flex justify-end mt-5">
                                        <div className="flex gap-5">
                                            <BtnSecondary
                                                onClick={() =>
                                                    router.visit("/guru/kuis/kategori")
                                                }
                                                text="Tutup"
                                            />
                                            <BtnPrimary
                                                className="text-lg"
                                                text="Simpan"
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

export default CreateSoal;
