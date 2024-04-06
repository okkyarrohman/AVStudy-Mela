import AbsensInput from "@/Components/AbsensInput/AbsensInput";
import BannerDashboard from "@/Components/Banner/BannerDashboard";

import Sidebar from "@/Components/Sidebar/Sidebar";
import TableSpentHours from "@/Components/Table/TableSpentHours";
import SearchInput from "@/element/Input/SearchInput";
import BtnPrimary from "@/element/button/BtnPrimary";
import { router } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import TableMateri from "@/Components/Table/TableMateri";
import TableProyek from "@/Components/Table/TableProyek";
import TableHasilDetail from "@/Components/Table/TableHasilDetail";
import TableProyekDetail from "@/Components/Table/TabelProyekDetail";

const ProyekGuru = ({ proyeks }) => {
    console.log(proyeks);
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
                                <div className="flex items-center mb-5">
                                    <a
                                        href="/guru/proyek"
                                        className="text-gray-400"
                                    >
                                        Proyek
                                    </a>
                                    <Icon
                                        className="text-xs mx-3 text-gray-400"
                                        icon="ep:arrow-right-bold"
                                    ></Icon>

                                    <a
                                        href={`/guru/proyek/${proyeks.id}/hasil`}
                                        className="text-gray-400"
                                    >
                                        Hasil
                                    </a>
                                    <Icon
                                        className="text-xs mx-3 text-gray-400"
                                        icon="ep:arrow-right-bold"
                                    ></Icon>
                                    <span className=" font-bold  text-black">
                                        Status
                                    </span>
                                </div>

                                <h1 className="font-bold text-2xl text-gray-700 my-3">
                                    Hasil Proyek Siswa
                                </h1>
                                <div className="grid grid-cols-12 items-center gap-3">
                                    <div className="col-span-5 relative">
                                        <SearchInput />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {proyeks ? (
                        <div>
                            <TableProyekDetail data={proyeks} />
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

export default ProyekGuru;
