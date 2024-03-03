import BtnPrimary from "@/element/button/BtnPrimary";
import { Icon } from "@iconify/react";

const TableProyekDetail = () => {
    return (
        <>
            <div className=" overflow-auto bg-white shadow-xl rounded-lg">
                <table className="w-full table-auto">
                    <thead className="">
                        {/* <div className="bg-sky-400 p-5 w-full"> */}
                        <tr className="text-left bg-purple-300">
                            <th scope="col" className="pe-1 p-4">
                                Langkah
                            </th>
                            <th scope="col" className="pe-3">
                                Tanggal
                            </th>
                            <th scope="col" className="pe-3">
                                Hasil
                            </th>
                            <th scope="col" className="pe-3">
                                Feedback
                            </th>
                        </tr>
                        {/* </div> */}
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row" className="p-3 ps-5">
                                Langkah 1
                            </td>
                            <td>
                                <p className="italic font-bold">02/06/2024</p>
                            </td>
                            <td className="py-3">
                                <div className="flex items-center gap-2">
                                    <Icon icon="akar-icons:file"></Icon>
                                    <p> file.pdf</p>
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="flex flex-col items-center gap-2 text-xl">
                                    <textarea
                                        rows={3}
                                        className="w-full rounded border-gray-300 text-xs"
                                        placeholder="Masukkan Feedback"
                                    />
                                    <BtnPrimary
                                    className="text-xs"
                                        text="Submit"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableProyekDetail;
