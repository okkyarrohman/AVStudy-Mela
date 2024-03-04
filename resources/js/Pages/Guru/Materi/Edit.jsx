import Sidebar from "@/Components/Sidebar/Sidebar";
import BtnPrimary from "@/element/button/BtnPrimary";
import BtnSecondary from "@/element/button/BtnSecondary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";

const EditMateri = () => {
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10">
                    <div className="flex items-center">
                        <a href="/guru/materi" className="text-gray-400">
                            Materi
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            Tambah Materi
                        </span>
                    </div>
                    <div className="my-5">
                        <div className="bg-white w-full shadow-xl border rounded-lg border-gray-300 ">
                            <div className="flex justify-between bg-purple-500 text-white p-4 w-full rounded-t-lg">
                                <h1 className=" font-bold">Tambah Materi</h1>
                            </div>
                            <div className="flex h-4/5 items-center justify-center">
                                <div className="flex flex-col h-full w-full px-5 py-3 m-3">
                                    <div className="my-2">
                                        <label className="font-bold ">
                                            Nama Materi *
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="materi_name"
                                                className="w-full rounded border-gray-400 mt-3"
                                                placeholder="Masukkan Nama Materi"
                                            />
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label className="font-bold">
                                            Deskripsi Materi *
                                        </label>
                                        <div>
                                            <textarea
                                                type="text"
                                                name="materi_desc"
                                                className="w-full rounded border-gray-400 mt-3"
                                                placeholder="Masukkan Deskripsi Singkat Materi"
                                                rows={5}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <p className="font-bold mb-3">Cover (.jpg/png) *</p>
                                        <label className="w-[15%] flex items-center font-bold py-2 my-1 px-5 text-black border-black border border-dashed rounded-lg">
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
                                    <div className="">
                                        <p className="font-bold mb-3">Konten Materi (.pdf) *</p>
                                        <label className="w-[15%] flex items-center font-bold py-2 my-1 px-5 text-black border-black border border-dashed rounded-lg">
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
                                    <div className="flex justify-end">
                                        <div className="flex gap-5">
                                            <BtnSecondary
                                                onClick={() => router.visit('/guru/materi')}
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

export default EditMateri;
