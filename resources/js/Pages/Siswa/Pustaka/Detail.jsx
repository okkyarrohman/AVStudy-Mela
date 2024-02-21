import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { Link } from "@inertiajs/react";

const ProposalDetailSiswa = () => {
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
                        <Icon className="text-xs mx-3 text-gray-400" icon="ep:arrow-right-bold"></Icon>
                        <a href="/siswa/pustaka/proposal" className="text-gray-400">
                            Proposal
                        </a>
                        <Icon className="text-xs mx-3 text-gray-400" icon="ep:arrow-right-bold"></Icon>
                        <span className="font-bold text-black"> Proposal 01 - Judul Proposal </span>
                    </div>
                    <div className="my-5">
                        <h1 className="font-bold text-2xl">Proposal 01 - Judul Proposal</h1>

                    </div>
                    <div className="bg-gray-200 h-[85%] w-full rounded-xl">
                        pdf
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProposalDetailSiswa;
