import AbsensInput from "@/Components/AbsensInput/AbsensInput";
import BannerDashboard from "@/Components/Banner/BannerDashboard";

import Sidebar from "@/Components/Sidebar/Sidebar";
import TableSpentHours from "@/Components/Table/TableSpentHours";
import SearchInput from "@/element/Input/SearchInput";
import BtnPrimary from "@/element/button/BtnPrimary";
import { router, usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import TableMateri from "@/Components/Table/TableMateri";
import { useEffect } from "react";
import Swal from "sweetalert2";
import TablePagination from "@/Components/Table/TablePagination";

const MateriGuru = ({ materis }) => {
    const { props } = usePage();
    useEffect(() => {
        console.log(props);
        if (props.page?.success) {
            Swal.fire({
                title: "Success",
                text: props.page.success,
                icon: "success",
            });
        }
    }, [props]);

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
                                    <div className="col-span-6 relative">
                                        <SearchInput />
                                    </div>
                                    <div className="col-span-6 flex justify-end">
                                        <BtnPrimary
                                            onClick={() =>
                                                router.visit("materi/create")
                                            }
                                            className="w-fit py-2 flex items-center justify-center gap-2"
                                            text="Tambah Data"
                                            icon="ph:plus-square"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {materis.data.length != 0 ? (
                        <div>
                            <TableMateri data={materis.data} />
                            <TablePagination data={materis.links} />
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

export default MateriGuru;
