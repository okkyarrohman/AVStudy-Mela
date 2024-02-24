import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import CardPustaka from "@/Components/Card/CardPustaka";
import CardProyek from "@/Components/Card/CardPustaka";

const ProyekSiswa = () => {
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10 flex flex-col gap-5">
                    <div className="my-5">
                        <h1 className="font-bold text-2xl">Proyek</h1>
                    </div>
                    <div className="w-full grid grid-cols-12 gap-5">
                        {[...Array(3)].map((item, idx) => {
                            return (
                                <div className="col-span-12 sm:col-span-4 lg:col-span-3">
                                    <CardProyek
                                        to="/siswa/pustaka/proposal"
                                        tipe="proposal"
                                        title="Contoh Template Proposal Proyek Akhir"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProyekSiswa;
