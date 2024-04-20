import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";

const CardReferensi = (props) => {
    return (
        <>
            <a href={props.to} target="_blank">
                <div className="flex flex-col items-center shadow-xl bg-white w-full h-full rounded-2xl border border-gray-300 p-5 hover:scale-105 active:opacity-50">
                    <img
                        className="object-contain w-20"
                        src="/assets/ReferensiIcon.svg"
                    />
                    <h1 className="text-xl text-center font-bold my-3">
                        {props.title}
                    </h1>
                    <p className="text-sm w-full line-clamp-2">{props.to}</p>
                </div>
            </a>
        </>
    );
};

export default CardReferensi;
