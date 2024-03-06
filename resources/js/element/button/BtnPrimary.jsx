import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";

const BtnPrimary = (props) => {
    return (
        <>
            <div className={`bg-purple-500 rounded-lg text-white font-bold px-3 py-1 sm:px-5 hover:bg-purple-700 ${props.className}` }>
                <button type={props.type} onClick={props.onClick}>{props.text}</button>
                <Icon icon={props.icon} className="text-2xl"></Icon>
            </div>
        </>
    );
};

export default BtnPrimary;
