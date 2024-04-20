import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";

const TableHasilDetail = ({ data }) => {
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
                        {data.map((item, idx) => {
                            return (
                                <tr>
                                    <td>
                                        <div className="flex items-center ps-3 gap-2">
                                            <p>{item.soal}</p>
                                        </div>
                                    </td>
                                    <td className="py-3">
                                        <p>{item.pivot.point}</p>
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

export default TableHasilDetail;
