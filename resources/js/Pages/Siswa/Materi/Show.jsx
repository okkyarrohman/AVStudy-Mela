import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

const MateriShowSiswa = ({ materis }) => {
    console.log(materis);

    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10">
                    <div className="flex items-center">
                        <a href="/siswa/materi" className="text-gray-400">
                            Materi
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            {" "}
                            {materis.nama}{" "}
                        </span>
                    </div>
                    <div className="my-5">
                        <h1 className="font-bold text-2xl">{materis.nama}</h1>
                    </div>
                    <embed
                        className="bg-gray-200 h-[85%] w-full rounded-xl"
                        src={`/storage/materi/konten/${materis.konten}`}
                        type="application/pdf"
                    ></embed>
                </div>
            </div>
        </>
    );
};

export default MateriShowSiswa;
