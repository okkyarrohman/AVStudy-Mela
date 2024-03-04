import BtnPrimary from "@/element/button/BtnPrimary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";

const TableProyekHasil = () => {
    return (
        <>
            <div className=" overflow-auto bg-white shadow-xl rounded-lg">
                <table className="w-full table-auto">
                    <thead className="">
                        {/* <div className="bg-sky-400 p-5 w-full"> */}
                        <tr className="text-left bg-purple-300">
                            <th scope="col" className="pe-1 p-4">
                                No
                            </th>
                            <th scope="col" className="pe-3">
                                Nama Siswa
                            </th>
                            <th scope="col" className="pe-3">
                                Progress
                            </th>
                            <th scope="col" className="pe-3 text-center">
                                Status
                            </th>
                            <th scope="col" className="pe-3">
                                Aksi
                            </th>
                        </tr>
                        {/* </div> */}
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row" className="p-3 ps-5">
                                1
                            </td>
                            <td className="py-3 ">
                                Jokowira wiri
                            </td>
                            <td>
                                <div className="flex items-center gap-1">
                                    <div className="h-3 w-[70%] bg-gray-300 rounded-xl">
                                        <div className="w-[50%] h-full rounded-xl bg-emerald-500"></div>
                                    </div>
                                    <p className="italic font-bold">50%</p>
                                </div>
                            </td>
                            <td className="py-3 flex justify-center">
                                <div className="w-[50%] text-center">
                                    <BtnPrimary onClick={()=>router.visit('hasil/detail')} text="Detail" />
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="flex items-center gap-2 text-xl">
                                    <button>
                                        <Icon icon="akar-icons:edit"></Icon>
                                    </button>
                                    <button className="text-red-500">
                                        <Icon icon="ph:trash-bold"></Icon>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableProyekHasil;
