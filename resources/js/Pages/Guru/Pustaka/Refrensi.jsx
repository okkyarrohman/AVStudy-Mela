import AbsensInput from "@/Components/AbsensInput/AbsensInput";
import BannerDashboard from "@/Components/Banner/BannerDashboard";

import Sidebar from "@/Components/Sidebar/Sidebar";
import TableSpentHours from "@/Components/Table/TableSpentHours";
import SearchInput from "@/element/Input/SearchInput";
import BtnPrimary from "@/element/button/BtnPrimary";
import { router } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import TableMateri from "@/Components/Table/TableMateri";
import TableProposal from "@/Components/Table/TableProposal";
import TableRefrensi from "@/Components/Table/TableRefrensi";

const RefrensiGuru = ({referensis}) => {
    console.log(referensis)
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
                                <div className="flex items-center mb-5">
                                    <a
                                        href="/guru/pustaka"
                                        className="text-gray-400"
                                    >
                                        Pustaka
                                    </a>
                                    <Icon
                                        className="text-xs mx-3 text-gray-400"
                                        icon="ep:arrow-right-bold"
                                    ></Icon>
                                    <span className="font-bold text-black">
                                        Refrensi
                                    </span>
                                </div>
                                <div className="grid grid-cols-12 items-center gap-3">
                                    <div className="col-span-6 relative">
                                        <SearchInput />
                                    </div>
                                    <div className="col-span-6 flex justify-end">
                                        <BtnPrimary
                                            onClick={() =>
                                                router.visit("refrensi/create")
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
                    {(referensis.length!=0) ? (
                        <div>
                            <TableRefrensi data={referensis}/>
                        </div>
                    ) : (
                        <div className="w-full h-[50%] flex flex-col justify-center items-center">
                            <img
                                src="/assets/NotFoundIcon.svg"
                                className="object-contain w-32 ms-8"
                            />
                            <h1 className="text-xl font-bold text-gray-700">
                                Tidak ada data yang ditemukan!
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default RefrensiGuru;
