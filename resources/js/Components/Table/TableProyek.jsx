import BtnPrimary from "@/element/button/BtnPrimary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { format } from "date-fns";

const TableProyek = ({ data }) => {
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
                                Nama
                            </th>
                            <th scope="col" className="pe-3">
                                Tenggat
                            </th>
                            <th scope="col" className="pe-3">
                                Hasil
                            </th>
                            <th scope="col" className="pe-3">
                                Aksi
                            </th>
                        </tr>
                        {/* </div> */}
                    </thead>
                    <tbody>
                        {data.map((item, idx) => {
                            const date = new Date(item.tenggat);
                            const formattedDate = format(date, "dd MMMM yyyy");
                            return (
                                <tr>
                                    <td scope="row" className="p-3 ps-5">
                                        {idx + 1}
                                    </td>
                                    <td className="w-fit">
                                        <p className="w-fit">{item.nama}</p>
                                    </td>
                                    <td>
                                        <p>{formattedDate}</p>
                                    </td>
                                    <td className="py-3">
                                        <BtnPrimary
                                            onClick={() =>
                                                router.get(
                                                    `proyek/${item.id}/hasil`
                                                )
                                            }
                                            className="w-fit text-center"
                                            text="Lihat"
                                        />
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-2 text-xl">
                                            <button
                                                onClick={() =>
                                                    router.get(
                                                        `proyek/${item.id}/edit`
                                                    )
                                                }
                                            >
                                                <Icon icon="akar-icons:edit"></Icon>
                                            </button>
                                            <button
                                                onClick={() =>
                                                    router.delete(
                                                        `proyek/${item.id}`
                                                    )
                                                }
                                                className="text-red-500"
                                            >
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

export default TableProyek;
