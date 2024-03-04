import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";

const TableDataSiswa = () => {
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
                                Email
                            </th>
                            <th scope="col" className="pe-3">
                                Alamat
                            </th>
                            <th scope="col" className="pe-3">
                                No. Hp
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
                            <td>
                                <p>Okky Kontolman</p>
                            </td>
                            <td>
                                <p>OkkyKontolman@gmail.com</p>
                            </td>
                            <td>
                                <p>Surabaya, Indonesia</p>
                            </td>

                            <td className="py-3">
                                <p>081947198471846</p>
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

export default TableDataSiswa;
