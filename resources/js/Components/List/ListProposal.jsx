import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import PrimaryButton from "../PrimaryButton";
import BtnPrimary from "@/element/button/BtnPrimary";

const ListProposal = (props) => {
    const downloadHandler = () => {
        alert("Hiyaa kontol");
    };

    return (
        <>
            <Link href={props.to}>
                <div className="flex items-center gap-3 rounded-xl shadow-xl active:opacity-50 border border-gray-300">
                    <div className="">
                        <img src={props.img} className="object-contain w-24 rounded-l-xl" />
                    </div>
                    <div className="flex w-full items-center justify-between ml-1 mr-2 sm:ml-5 sm:mr-10">
                        <div>
                            <h1 className="font-bold text-md sm:text-xl">{props.title}</h1>
                            <p className="text-sm hidden lg:block">{props.desc}</p>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <BtnPrimary
                                text="Lihat"
                                to="/siswa/pustaka/proposal/detail"
                            />
                            <div className="flex text-2xl text-gray-500 hover:text-gray-700">
                                <button onClick={() => downloadHandler()}>
                                    <Icon icon="line-md:download-loop"></Icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ListProposal;
