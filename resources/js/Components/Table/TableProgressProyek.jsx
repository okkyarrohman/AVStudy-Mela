const TableProgressProyek = () => {
    return (
        <>
            <h1 className="font-black text-xl mb-5">Kemajuan Proyek</h1>
            <div className=" overflow-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="text-left">
                            <th scope="col" className="pe-5">
                                No
                            </th>
                            <th scope="col" className="pe-5 w-[20%]">
                                Proyek
                            </th>
                            <th scope="col-2" className="pe-10 w-[60%]">
                                Progress
                            </th>
                            <th scope="col" className="pe-10">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Proyek 1</td>
                            <td className="pe-5">
                                <div className="flex items-center gap-1">
                                    <div className="h-3 w-[90%] bg-gray-300 rounded-xl">
                                        <div className="w-[50%] h-full rounded-xl bg-emerald-500"></div>
                                    </div>
                                    <p className="italic font-bold">50%</p>
                                </div>
                            </td>
                            <td className="py-3">
                                <button className="bg-purple-700 py-1 px-4 text-white rounded-xl">
                                    {" "}
                                    Lihat{" "}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableProgressProyek;

