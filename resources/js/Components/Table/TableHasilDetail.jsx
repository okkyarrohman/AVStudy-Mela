import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";

const TableHasilDetail = () => {
    return (
        <>
            <div className=" overflow-auto bg-white shadow-xl rounded-lg">
                <table className="w-full table-auto">
                    <thead className="">
                        {/* <div className="bg-sky-400 p-5 w-full"> */}
                        <tr className="text-left bg-purple-300">
                            <th scope="col" className="pe-1 p-4">
                                Pertanyaan
                            </th>
                            <th scope="col" className="pe-3">
                                Poin
                            </th>
                        </tr>
                        {/* </div> */}
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center ps-3 gap-2">
                                    <p>Kenapa Prabowo Ngeselin?</p>
                                </div>
                            </td>

                            <td className="py-3">
                                <p>4</p>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableHasilDetail;
