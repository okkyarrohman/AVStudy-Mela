import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";

const ListMateri = (props) => {
    return (
        <>
            <Link href={route(props.to, { id: props.id })} key={props.id}>
                <div className="flex items-center gap-3 rounded-xl shadow-xl hover:scale-105 active:opacity-50">
                    <div className="">
                        <img
                            src={
                                props.img
                                    ? `/storage/materi/cover/${props.img}`
                                    : "/assets/MateriCover.svg"
                            }
                            className="object-contain w-32 rounded-l-xl"
                        />
                    </div>
                    <div className="w-[100%] sm:w-[70%] ml-5">
                        <h1 className="text-lg font-bold sm:text-xl">
                            {props.title}
                        </h1>
                        <p className="text-sm hidden sm:block">{props.desc}</p>
                    </div>
                    <div className="text-lg sm:text-2xl mr-5">
                        <Icon icon="ep:arrow-right-bold"></Icon>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ListMateri;
