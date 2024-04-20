import { Link } from "@inertiajs/react";

const BtnSecondary = (props) => {
    return (
        <>
            <div className=" border-2 border-purple-500 rounded-lg text-purple-600 font-bold px-3 py-1 sm:px-5 hover:opacity-50">
                <button onClick={props.onClick}>{props.text}</button>
            </div>
        </>
    );
};

export default BtnSecondary;
