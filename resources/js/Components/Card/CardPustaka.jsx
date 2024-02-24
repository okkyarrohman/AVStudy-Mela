
import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";

const CardPustaka = (props) => {
    function tipePustaka(tipe) {
        if (props.tipe === tipe) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
            <Link href={props.to} onClick={props.onClick}>
                <div className="flex flex-col items-center rounded-xl shadow-xl h-full hover:scale-105 active:opacity-50">
                    <div className="w-full">
                        <img
                            src={
                                tipePustaka("refrensi")
                                    ? "/assets/RefrensiCover.svg"
                                    : "/assets/ProposalCover.svg"
                            }
                            className="object-contain w-full rounded-t-xl"
                        />
                    </div>
                    <div className="flex flex-col gap-3 p-3 w-full h-full px-5">
                        <div className="self-start flex items-center gap-2">
                            <Icon
                                className={
                                    tipePustaka("refrensi")
                                        ? "text-sky-400"
                                        : "text-yellow-400"
                                }
                                icon="icon-park-solid:play"
                            ></Icon>
                            <span className="font-bold text-md">
                                {props.tipe}
                            </span>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-lg">{props.title}</h1>
                        </div>
                    </div>
                    <div className="mb-3">
                        <hr></hr>
                        <Link href={props.to}>
                            <button className="bg-purple-500 text-white py-1 px-5 rounded-lg hover:bg-purple-700 active:bg-purple-300">
                                Lihat
                            </button>
                        </Link>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default CardPustaka;
