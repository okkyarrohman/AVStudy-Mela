import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { Link } from "@inertiajs/react";
import CardPustaka from "@/Components/Card/CardPustaka";
import CardRefrensi from "@/Components/Card/CardRefrensi";

const RefrensiSiswa = ({pustakas}) => {
    console.log(pustakas)
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10">
                    <div className="flex items-center">
                        <a href="/siswa/pustaka" className="text-gray-400">
                            Pustaka
                        </a>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black"> Refrensi </span>
                    </div>
                    <div className="my-5">
                        <h1 className="font-bold text-xl">Refrensi</h1>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                        {pustakas.map((item, idx) => {
                            return (
                                <div className="col-span-1">
                                    <CardRefrensi
                                        to={item.link}
                                        title={item.judul}
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

export default RefrensiSiswa;
