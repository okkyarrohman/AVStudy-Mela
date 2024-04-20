import { Icon } from "@iconify/react";
import { Link, router } from "@inertiajs/react";

const TableHasil = ({ data }) => {
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
                                Kategori Kuis
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
                        {data.map((item, idx) => {
                            return (
                                <tr>
                                    <td scope="row" className="p-3 ps-5">
                                        {item.id}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <p>{item.user.name}</p>
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-2">
                                            <p>{item.kategorikuis.kuis}</p>
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <p>{item.total_points}</p>
                                    </td>
                                    <td className="py-3">
                                        <div className="flex items-center gap-2 text-xl">
                                            <Link
                                                href={route(
                                                    "hasil.show",
                                                    item.id
                                                )}
                                            >
                                                <Icon icon="bx:show"></Icon>
                                            </Link>
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

export default TableHasil;
