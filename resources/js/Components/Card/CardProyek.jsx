import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";

const CardProyek = (props) => {
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
                <div className="flex flex-col items-center rounded-xl shadow-xl h-full hover:scale-105 active:opacity-50 p-5 border border-gray-300">
                    <div className="w-full">
                        <h1 className="font-bold text-xl">{props.title.length >40 ?props.title.slice(0,37)+"...":props.title }</h1>
                    </div>
                    <div className="w-full h-full border border-purple-500 rounded-lg m-2">
                        <div className="flex flex-col items-center gap-3 p-3 w-full h-full ">
                            <p className="italic font-bold">50%</p>
                            <div className="flex items-center gap-1 w-full">
                                <div className="h-3 w-full bg-gray-300 rounded-xl">
                                    <div className="w-[50%] h-full rounded-xl bg-emerald-500"></div>
                                </div>
                            </div>
                            <p className="font-bold text-sm  italic text-purple-600">
                                {props.DL}
                            </p>
                            <div className="mb-3">
                                <hr></hr>
                                <Link href={props.to}>
                                    <button className="bg-purple-500 text-white py-1 px-5 rounded-lg hover:bg-purple-700 active:bg-purple-300">
                                        Lihat
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default CardProyek;
