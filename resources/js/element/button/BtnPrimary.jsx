import { Link } from "@inertiajs/react";

const BtnPrimary = (props) => {
    return (
        <>
            <div className="bg-purple-500 rounded-lg text-white font-bold px-3 py-1 sm:px-5 hover:bg-purple-700">
                <button onClick={props.onClick}>{props.text}</button>
            </div>
        </>
    );
};

export default BtnPrimary;
