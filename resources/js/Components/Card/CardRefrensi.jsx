import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";

const CardRefrensi = (props) => {
    return (
        <>
            <Link href={props.to}>
                <div className="flex flex-col items-center shadow-xl bg-white w-full h-full rounded-2xl border border-gray-300 p-5 hover:scale-105 active:opacity-50">
                    <img
                    className="object-contain w-20"
                        src="/assets/RefrensiIcon.svg"
                    />
                    <h1 className="text-xl text-center font-bold my-3">{props.title}</h1>
                    <a className="text-sm">{props.to}</a>
                </div>
            </Link>
        </>
    );
};

export default CardRefrensi;
