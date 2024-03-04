import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import CardPustaka from "@/Components/Card/CardPustaka";
import CardProyek from "@/Components/Card/CardProyek";
import { useState } from "react";
import ListProyek from "@/Components/List/ListProyek";

const ProyekSiswa = ({ proyeks }) => {
    const [detailProyek, setDetailProyek] = useState(false);
    const [showProyek, setShowProyek] = useState([]);
    const showDetail = (id, event) => {
        event.preventDefault();
        setShowProyek(proyeks[id]);
        console.log(showProyek);
        setDetailProyek(!detailProyek);
    };
    console.log(showProyek);
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10 flex flex-col gap-5">
                    {detailProyek && (
                        <div className="flex items-center">
                            <a href="/siswa/proyek" className="text-gray-400">
                                proyek
                            </a>
                            <Icon
                                className="text-xs mx-3 text-gray-400"
                                icon="ep:arrow-right-bold"
                            ></Icon>
                            <span className="font-bold text-black">
                                {" "}
                                {showProyek.nama}{" "}
                            </span>
                        </div>
                    )}
                    <div className="my-5">
                        <h1 className="font-bold text-2xl">Proyek</h1>
                    </div>
                    {!detailProyek ? (
                        <div className="w-full grid grid-cols-12 gap-5">
                            {proyeks.map((item, idx) => {
                                return (
                                    <div className="col-span-12 sm:col-span-4 lg:col-span-3" key={idx}>
                                        <CardProyek
                                            onClick={(e) =>
                                                showDetail(item.id, e)
                                            }
                                            title={item.nama}
                                            DL={item.tenggat}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <>
                            <div>
                                <ListProyek show={showProyek} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProyekSiswa;
