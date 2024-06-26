import AbsensInput from "@/Components/AbsensInput/AbsensInput";
import BannerDashboard from "@/Components/Banner/BannerDashboard";

import Sidebar from "@/Components/Sidebar/Sidebar";
import TableSpentHours from "@/Components/Table/TableSpentHours";
import SearchInput from "@/element/Input/SearchInput";
import BtnPrimary from "@/element/button/BtnPrimary";
import { router } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import TableMateri from "@/Components/Table/TableMateri";
import TableDataSiswa from "@/Components/Table/TableDataSiswa";
import TablePagination from "@/Components/Table/TablePagination";

const DataSiswa = ({ siswas }) => {
    console.log(siswas);
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
                                    Data Siswa
                                </h1>
                                <div className="grid grid-cols-12 items-center gap-3">
                                    <div className="col-span-5 relative">
                                        <SearchInput />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {siswas.data.length != 0 ? (
                        <div>
                            <TableDataSiswa data={siswas.data} />
                            <TablePagination data={siswas.links} />
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

export default DataSiswa;
