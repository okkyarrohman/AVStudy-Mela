import { siswaSidebar, guruSidebar, SubkuisGuru } from "./dataSidebar";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const SidebarItems = () => {
    const { url, component } = usePage();
    const [sideitems, setSideitems] = useState([]);
    const [dropdown, setDropdown] = useState(true);
    const [guru, setGuru] = useState(false);

    useEffect(() => {
        if (url.includes("siswa")) {
            setSideitems(siswaSidebar);
        } else {
            setSideitems(guruSidebar);
            setGuru(true);
        }
    });
    return (
        <>
            {(guru ? sideitems.slice(0, 3) : sideitems).map((item, idx) => {
                return (
                    <Link
                        key={idx}
                        href={item.path}
                        className={
                            url.startsWith(item.path)
                                ? "flex hover:bg-white/75 active:bg-white/50 justify-center md:justify-start items-center md:pl-5 py-2 xl:pl-10 bg-white text-purple-500 w-full"
                                : "flex  hover:bg-white/25 active:bg-white/50 justify-center md:justify-start items-center md:pl-5 py-2 xl:pl-10 text-white"
                        }
                    >
                        <Icon
                            className="mr-1 xl:mr-3 text-xl"
                            icon={item.icon}
                        ></Icon>
                        <span className="hidden md:block">{item.name}</span>
                    </Link>
                );
            })}
            {guru && (
                <>
                    <button
                        onClick={() => setDropdown(!dropdown)}
                        aria-haspopup="true"
                        aria-expanded={dropdown ? "true" : "false"}
                        className={
                            url.startsWith("guru/kuis")
                                ? "flex hover:bg-white/75 active:bg-white/50 justify-center md:justify-start items-center md:pl-5 py-3 xl:pl-10 bg-white text-purple-500 w-full"
                                : "w-full  flex  hover:bg-white/25 active:bg-white/50 justify-center md:justify-start items-center md:pl-5 py-3 xl:pl-10 text-white"
                        }
                    >
                        <Icon
                            className="mr-1 xl:mr-3 text-xl"
                            icon="lucide:clipboard-list"
                        ></Icon>
                        <span className="hidden md:block">Kuis</span>
                    </button>
                    {dropdown &&
                        SubkuisGuru.map((item, idx) => {
                            return (
                                <div
                                    className="w-full"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="kuis"
                                >
                                    <Link
                                        className={
                                            url.startsWith(item.path)
                                                ? "pl-16 flex hover:bg-white/75 active:bg-white/50 justify-center md:justify-start items-center  py-1  bg-white text-purple-500 "
                                                : " pl-16 flex  hover:bg-white/25 active:bg-white/50 justify-center md:justify-start items-center  py-1  text-white"
                                        }
                                        href={item.path}
                                    >
                                        <Icon
                                            className="mr-1 xl:mr-3 text-xl"
                                            icon={item.icon}
                                        ></Icon>
                                        <span className="hidden md:block">
                                            {item.name}
                                        </span>
                                    </Link>
                                </div>
                            );
                        })}
                </>
            )}
            {guru &&
                sideitems.slice(3, 5).map((item, idx) => {
                    return (
                        <Link
                            key={idx}
                            href={item.path}
                            className={
                                url.startsWith(item.path)
                                    ? "flex hover:bg-white/75 active:bg-white/50 justify-center md:justify-start items-center md:pl-5 py-3 xl:pl-10 bg-white text-purple-500 w-full"
                                    : "flex  hover:bg-white/25 active:bg-white/50 justify-center md:justify-start items-center md:pl-5 py-3 xl:pl-10 text-white"
                            }
                        >
                            <Icon
                                className="mr-1 xl:mr-3 text-xl"
                                icon={item.icon}
                            ></Icon>
                            <span className="hidden md:block">{item.name}</span>
                        </Link>
                    );
                })}
        </>
    );
};

export default SidebarItems;
