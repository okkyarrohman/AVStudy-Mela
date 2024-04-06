import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { Link } from "@inertiajs/react";

const ProposalDetailSiswa = ({ pustakas }) => {
    console.log(pustakas);
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-10">
                    <div className="flex items-center">
                        <Link href="/siswa/pustaka" className="text-gray-400">
                            Pustaka
                        </Link>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <Link
                            href="/siswa/pustaka/proposal"
                            className="text-gray-400"
                        >
                            Proposal
                        </Link>
                        <Icon
                            className="text-xs mx-3 text-gray-400"
                            icon="ep:arrow-right-bold"
                        ></Icon>
                        <span className="font-bold text-black">
                            {pustakas.judul}
                        </span>
                    </div>
                    <div className="my-5">
                        <h1 className="font-bold text-2xl">{pustakas.judul}</h1>
                    </div>
                    <embed
                        className="bg-gray-200 h-[85%] w-full rounded-xl"
                        src={`/storage/pustaka/konten/${pustakas.konten}`}
                        type="application/pdf"
                    ></embed>
                </div>
            </div>
        </>
    );
};

export default ProposalDetailSiswa;
