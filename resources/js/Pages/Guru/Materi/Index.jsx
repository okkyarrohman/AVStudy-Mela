import AbsensInput from "@/Components/AbsensInput/AbsensInput";
import BannerDashboard from "@/Components/Banner/BannerDashboard";

import Sidebar from "@/Components/Sidebar/Sidebar";
import TableSpentHours from "@/Components/Table/TableSpentHours";
import SearchInput from "@/element/Input/SearchInput";
import BtnPrimary from "@/element/button/BtnPrimary";
import { router } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import TableMateri from "@/Components/Table/TableMateri";

const MateriGuru = () => {
    const adaMateri = true;
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-5">
                    <div className="flex flex-col md:grid md:grid-cols-6">
                        <div className="col-span-6">
                            <div className="my-5">
                                <h1 className="font-bold text-2xl text-gray-700 my-3">
                                    Materi
                                </h1>
                                <div className="grid grid-cols-12 items-center gap-3">
                                    <div className="col-span-5 relative">
                                        <SearchInput />
                                    </div>
                                    <div className="col-span-2 col-start-11">
                                        <BtnPrimary
                                            onClick={() =>
                                                router.visit("materi/create")
                                            }
                                            className="py-2 flex items-center justify-center gap-2"
                                            text="Tambah Data"
                                            icon="ph:plus-square"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {adaMateri ? (
                        <div>
                            <TableMateri />
                        </div>
                    ) : (
                        <div className="w-full h-[50%] flex flex-col justify-center items-center">
                            <img
                                src="/assets/NotFoundIcon.svg"
                                className="object-contain w-40 ms-8"
                            />
                            <h1 className="text-2xl font-bold text-gray-700">
                                Tidak ada data yang ditemukan!
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MateriGuru;
