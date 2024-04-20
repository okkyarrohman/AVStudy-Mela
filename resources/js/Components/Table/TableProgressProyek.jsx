import { Link } from "@inertiajs/react";

const TableProgressProyek = ({ data }) => {
    let progress = 0;
    if (data.length != 0) {
        data.map((result) => {
            const totalAnswers = ["answer1", "answer2", "answer3", "answer4"];
            if (result["answer_note"] || result["answer_link"]) {
                totalAnswers.push("answer_note");
                const index = totalAnswers.indexOf("answer4");
                if (index !== -1) {
                    totalAnswers.splice(index, 1);
                }
            }
            const filledAnswers = totalAnswers.filter(
                (answer) => result[answer]
            );

            progress = Math.min(
                (filledAnswers.length / totalAnswers.length) * 100,
                100
            );
        });
    }

    return (
        <>
            <h1 className="font-black text-xl mb-5">Kemajuan Proyek</h1>
            {data.length != 0 ? (
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
                                <td className="line-clamp-2">
                                    {data[0].proyek.nama}
                                </td>
                                <td className="pe-5">
                                    <div className="flex items-center gap-1">
                                        <div className="h-3 w-[90%] bg-gray-300 rounded-xl">
                                            <div
                                                className={`h-full rounded-xl bg-emerald-500`}
                                                style={{
                                                    width: `${progress}%`,
                                                }}
                                            ></div>
                                        </div>
                                        <p className="italic font-bold">
                                            {progress}%
                                        </p>
                                    </div>
                                </td>
                                <td className="py-3">
                                    <Link
                                        href="/siswa/proyek"
                                        className="bg-purple-700 py-1 px-4 text-white rounded-xl"
                                    >
                                        Lihat
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-blue-950 bg-white border-b-2 py-3 border-purple-300">
                    Belum Ada Tugas Yang Dikerjakan
                </p>
            )}
        </>
    );
};

export default TableProgressProyek;
