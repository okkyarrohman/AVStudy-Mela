import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { Link } from "@inertiajs/react";
import CardPustaka from "@/Components/Card/CardPustaka";
import CardReferensi from "@/Components/Card/CardReferensi";
import ListProposal from "@/Components/List/ListProposal";

const ReferensiSiswa = ({ pustakas }) => {
    console.log(pustakas);
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10 flex flex-col gap-4">
                    <div className="flex items-center">
                        <Link href="/siswa/pustaka" className="text-gray-400">
                            Pustaka
                        </Link>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">Proposal</span>
                    </div>
                    <div className="my-5">
                        <h1 className="font-bold text-xl">Proposal</h1>
                    </div>
                    {pustakas.map((item, idx) => {
                        return (
                            <ListProposal
                                key={idx}
                                id={item.id}
                                img={item.cover}
                                title={item.judul}
                                file={item.konten}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ReferensiSiswa;
