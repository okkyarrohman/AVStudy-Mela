import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";

const TableMateri = ({ data }) => {
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
                                Materi
                            </th>
                            <th scope="col" className="pe-3">
                                Deskripsi
                            </th>
                            <th scope="col" className="pe-3">
                                Cover
                            </th>
                            <th scope="col" className="pe-3">
                                File
                            </th>
                            <th scope="col" className="pe-3">
                                Aksi
                            </th>
                        </tr>
                        {/* </div> */}
                    </thead>
                    <tbody>
                        {data.map((item, idx) => {
                            return (
                                <tr>
                                    <td scope="row" className="p-3 ps-5">
                                        {idx + 1}
                                    </td>
                                    <td>{item.nama.length>20?item.nama.slice(0,17)+"...":item.nama}</td>
                                    <td className="pe-2">{item.deskripsi.length>20?item.deskripsi.slice(0,17)+"...":item.deskripsi}</td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-2">
                                            <Icon icon="material-symbols:image-outline"></Icon>
                                            <p>{item.cover.length>20?item.cover.slice(0,17)+"...":item.cover}</p>
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-2">
                                            <Icon icon="akar-icons:file"></Icon>
                                            <p>{item.konten.length>20?item.konten.slice(0,17)+"...":item.konten}</p>
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-2 text-xl">
                                            <button onClick={()=>router.get(`materi/${item.id}/edit`)}>
                                                <Icon icon="akar-icons:edit"></Icon>
                                            </button>
                                            <button onClick={()=>router.delete(`materi/${item.id}`)} className="text-red-500">
                                                <Icon icon="ph:trash-bold"></Icon>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableMateri;
