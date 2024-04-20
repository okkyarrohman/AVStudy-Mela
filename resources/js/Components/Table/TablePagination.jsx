import { Link } from "@inertiajs/react";

export default function TablePagination({ data }) {
    return (
        <div className="flex w-fit mx-auto overflow-hidden justify-center mt-8 border border-purple-600 rounded-xl">
            {data.map((link) => {
                return (
                    <Link
                        className={`text-base p-3 font-semibold hover:bg-purple-400 hover:text-white ${
                            link.active == true && "bg-purple-600 text-white"
                        }`}
                        key={link.label}
                        href={link.url}
                    >
                        {link.label == "&laquo; Previous"
                            ? "Prev"
                            : link.label === "Next &raquo;"
                            ? "Next"
                            : link.label}
                    </Link>
                );
            })}
        </div>
    );
}
