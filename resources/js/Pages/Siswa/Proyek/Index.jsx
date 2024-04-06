import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import CardPustaka from "@/Components/Card/CardPustaka";
import CardProyek from "@/Components/Card/CardProyek";
import { useState } from "react";
import ListProyek from "@/Components/List/ListProyek";
import { Link } from "@inertiajs/react";

const ProyekSiswa = ({ proyeks, auth }) => {
    const [detailProyek, setDetailProyek] = useState(false);
    const [showProyek, setShowProyek] = useState([]);
    const showDetail = (index, event) => {
        event.preventDefault();
        setShowProyek(proyeks[index]);
        console.log(showProyek);
        setDetailProyek(!detailProyek);
    };
    console.log(proyeks);
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10 flex flex-col gap-5">
                    {detailProyek && (
                        <div className="flex items-center">
                            <Link
                                href="/siswa/proyek"
                                className="text-gray-400"
                            >
                                Proyek
                            </Link>
                            <Icon
                                className="text-xs mx-3 text-gray-400"
                                icon="ep:arrow-right-bold"
                            ></Icon>
                            <span className="font-bold text-black">
                                {showProyek.nama}
                            </span>
                        </div>
                    )}
                    <div className="my-5">
                        <h1 className="font-bold text-2xl">Proyek</h1>
                    </div>
                    {!detailProyek ? (
                        <div className="w-full grid grid-cols-12 gap-5">
                            {proyeks.map((item, idx) => {
                                const userProyekResults =
                                    item.proyek_result.filter(
                                        (result) =>
                                            result.user_id == auth.user.id
                                    );

                                let progress = 0;
                                if (userProyekResults.length != 0) {
                                    userProyekResults.map((result) => {
                                        const totalAnswers = [
                                            "answer1",
                                            "answer2",
                                            "answer3",
                                            "answer_note",
                                            "answer_link",
                                        ];
                                        const filledAnswers =
                                            totalAnswers.filter(
                                                (answer) => result[answer]
                                            );

                                        progress =
                                            (filledAnswers.length /
                                                totalAnswers.length) *
                                            100;
                                    });
                                }

                                return (
                                    <div
                                        className="col-span-12 sm:col-span-4 lg:col-span-3"
                                        key={idx}
                                    >
                                        <CardProyek
                                            onClick={(e) => showDetail(idx, e)}
                                            title={item.nama}
                                            DL={item.tenggat}
                                            progress={progress}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <>
                            <div>
                                <ListProyek show={showProyek} auth={auth} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProyekSiswa;
