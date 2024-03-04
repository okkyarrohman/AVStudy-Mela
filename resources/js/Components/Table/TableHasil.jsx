import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";

const TableHasil = () => {
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
                                Pertanyaan
                            </th>
                            <th scope="col" className="pe-3">
                                Poin
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
                                <div className="flex items-center gap-2">
                                    <p>Kenapa Prabowo Ngeselin?</p>
                                </div>
                            </td>
                            <td className="py-3">
                            <div className="flex items-center gap-2">
                                    <p>A. Karena Gend</p>
                                </div>
                            </td>
                            <td className="py-3">
                                <p>4</p>
                            </td>
                            <td className="py-3">
                                <div className="flex items-center gap-2 text-xl">
                                    <button onClick={()=>router.visit('hasil/show')}>
                                        <Icon icon="bx:show"></Icon>
                                    </button>
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

export default TableHasil;
