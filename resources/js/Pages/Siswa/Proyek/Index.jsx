import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import CardPustaka from "@/Components/Card/CardPustaka";
import CardProyek from "@/Components/Card/CardProyek";

const ProyekSiswa = ({proyeks}) => {
    console.log(proyeks)
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
                        {proyeks.map((item, idx) => {
                            return (
                                <div className="col-span-12 sm:col-span-4 lg:col-span-3">
                                    <CardProyek
                                        to="/siswa/pustaka/proposal"
                                        title={item.nama}
                                        DL={item.tenggat}
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
