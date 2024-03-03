import { Icon } from "@iconify/react";

const TableSoal = () => {
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
                                Kategori Kuis
                            </th>
                            <th scope="col" className="pe-3">
                                Pertanyaan
                            </th>
                            <th scope="col" className="pe-3">
                                Gambar
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
                            <td>Kategori Kuis</td>
                            <td className="py-3">
                                <div className="flex items-center gap-2">
                                    <p>Kenapa Prabowo Ngeselin?</p>
                                </div>
                            </td>
                            <td className="py-3">
                            <div className="flex items-center gap-2">
                                    <Icon icon="material-symbols:image-outline"></Icon>
                                    <p>image.jpg</p>
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="flex items-center gap-2 text-xl">
                                    <button >
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

export default TableSoal;
