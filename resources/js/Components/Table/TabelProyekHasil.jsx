import BtnPrimary from "@/element/button/BtnPrimary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";

const TableProyekHasil = ({ data }) => {
    console.log(data);
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
                                Progress
                            </th>
                            <th scope="col" className="pe-3 text-center">
                                Status
                            </th>
                            {/* <th scope="col" className="pe-3">
                                Aksi
                            </th> */}
                        </tr>
                        {/* </div> */}
                    </thead>
                    <tbody>
                        {data.map((item, idx) => {
                            let progress = 0;
                            const totalAnswers = [
                                "answer1",
                                "answer2",
                                "answer3",
                                "answer_note",
                                "answer_link",
                            ];
                            const filledAnswers = totalAnswers.filter(
                                (answer) => item[answer]
                            );
                            progress =
                                (filledAnswers.length / totalAnswers.length) *
                                100;

                            return (
                                <tr>
                                    <td scope="row" className="p-3 ps-5">
                                        1
                                    </td>
                                    <td className="py-3 ">{item.user.name}</td>
                                    <td>
                                        <div className="flex items-center gap-1">
                                            <div className="h-3 w-[70%] bg-gray-300 rounded-xl">
                                                <div
                                                    className="h-full rounded-xl bg-emerald-500"
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
                                    <td className="py-3 flex justify-center">
                                        <div className="w-[50%] text-center">
                                            <BtnPrimary
                                                onClick={() =>
                                                    router.get(
                                                        route(
                                                            "detail-hasil-proyek.show",
                                                            item.id
                                                        )
                                                    )
                                                }
                                                text="Detail"
                                            />
                                        </div>
                                    </td>
                                    {/* <td className="py-3">
                                        <div className="flex items-center gap-2 text-xl">
                                            <button>
                                                <Icon icon="akar-icons:edit"></Icon>
                                            </button>
                                            <button className="text-red-500">
                                                <Icon icon="ph:trash-bold"></Icon>
                                            </button>
                                        </div>
                                    </td> */}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableProyekHasil;
