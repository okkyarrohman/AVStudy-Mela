import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import PrimaryButton from "../PrimaryButton";
import BtnPrimary from "@/element/button/BtnPrimary";

const ListProposal = (props) => {
    return (
        <>
            <div className="flex items-center gap-3 rounded-xl shadow-xl active:opacity-50 border border-gray-300">
                <div className="">
                    <img
                        src={`/storage/pustaka/cover/${props.img}`}
                        className="object-contain w-24 rounded-l-xl"
                    />
                </div>
                <div className="flex w-full items-center justify-between ml-1 mr-2 sm:ml-5 sm:mr-10">
                    <div>
                        <h1 className="font-bold text-md sm:text-xl">
                            {props.title}
                        </h1>
                        {/* <p className="text-sm hidden lg:block">{props.desc}</p> */}
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Link
                            href={`/siswa/pustaka/proposal/${props.id}/detail`}
                            className={`bg-purple-500 rounded-lg text-white font-bold px-3 py-1 sm:px-5 hover:bg-purple-700`}
                        >
                            Lihat
                        </Link>
                        <a
                            href={`/storage/pustaka/konten/${props.file}`}
                            className="flex text-2xl text-gray-500 hover:text-gray-700"
                            download
                        >
                            <Icon icon="line-md:download-loop"></Icon>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListProposal;
