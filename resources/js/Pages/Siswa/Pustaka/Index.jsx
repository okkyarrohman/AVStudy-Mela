import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { Link } from "@inertiajs/react";
import CardPustaka from "@/Components/Card/CardPustaka";

const PustakaSiswa = () => {
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10">
                    <div className="my-5">
                        <h1 className="font-bold text-2xl">Pustaka</h1>
                    </div>
                    <div className="w-full grid grid-cols-6 gap-5">
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <CardPustaka
                                to="/siswa/pustaka/referensi"
                                tipe="referensi"
                                title="Referensi Video Proyek Iklan Layanan Masyarakat"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <CardPustaka
                                to="/siswa/pustaka/proposal"
                                tipe="proposal"
                                title="Contoh Template Proposal Proyek Akhir"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PustakaSiswa;
