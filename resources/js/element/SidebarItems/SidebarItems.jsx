import { siswaSidebar } from "./dataSidebar";
import { Link, usePage } from "@inertiajs/react";
import { Icon } from "@iconify/react";

const SidebarItems = (props) => {
    const { url, component } = usePage();

    return (
        <>
            {siswaSidebar.map((item, idx) => {
                return (
                    <Link
                        key={idx}
                        href={item.path}
                        className={
                            url.startsWith(item.path)
                                ? "flex  justify-center md:justify-start items-center md:pl-5 py-3 xl:pl-10 bg-white text-purple-500 w-full"
                                : "flex justify-center md:justify-start items-center md:pl-5 py-3 xl:pl-10 text-white"
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
