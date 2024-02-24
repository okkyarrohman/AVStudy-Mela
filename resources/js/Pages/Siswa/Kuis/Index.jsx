import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import TableProgressProyek from "@/Components/Table/TableProgressProyek";
import { Link } from "@inertiajs/react";
import ListMateri from "@/Components/List/ListMateri";
import ListKuis from "@/Components/List/ListKuis";
import Countdown from "react-countdown";

const KuisSiswa = () => {
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10 flex flex-col gap-5">
                    <div className="my-5">
                        <h1 className="font-bold text-2xl">Kuis</h1>
                    </div>
                    {[...Array(3)].map((item, idx) => {
                        return (
                            <ListKuis
                                key={idx}
                                title="Judul Kuis"
                                qty={25}
                                time={30}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default KuisSiswa;
