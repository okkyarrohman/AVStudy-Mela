import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { router } from "@inertiajs/react";

const TableKategori = ({ data }) => {
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
                                Tenggat
                            </th>
                            <th scope="col" className="pe-3">
                                Waktu
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
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.kuis.length > 20
                                            ? item.kuis.slice(0, 27) + "..."
                                            : item.kuis}
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-2">
                                            <p>{formattedDate}</p>
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-2">
                                            <p> {item.waktu} Menit</p>
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-2 text-xl">
                                            <button
                                                onClick={() =>
                                                    router.get(
                                                        `kategori/${item.id}/edit`
                                                    )
                                                }
                                            >
                                                <Icon icon="akar-icons:edit"></Icon>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    router.delete(
                                                        `kategori/${item.id}`
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

export default TableKategori;
