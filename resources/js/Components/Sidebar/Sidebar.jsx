import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import SidebarItems from "@/element/SidebarItems/SidebarItems";


const Sidebar = () => {
    return (
        <>
            <div className="flex rounded-r-3xl bg-purple-700 text-sky-300 h-full w-1/6 fixed ">
                <div className="flex flex-col justify-between items-center w-full">
                    <div className="flex flex-col items-start my-10 w-full gap-5">
                        <div className="flex justify-center md:justify-start w-full">
                            <img
                                src="/assets/AVLogo.svg"
                                className="object-contain w-0 ml-3 sm:w-20 md:w-24 lg:w-32 xl:ml-8"
                            />
                        </div>
                        <div className="w-full text-white">
                            <h1 className="font-bold text-md text-center md:text-start md:ml-4 xl:ml-10">
                                Menu
                            </h1>
                            <div className="text-md font-black my-3 w-full">
                                <SidebarItems />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 flex justify-center md:justify-start">
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="flex justify-center md:justify-start items-center md:pl-5 py-3 xl:pl-10 text-white"
                        >
                            <Icon
                                className="mr-1 xl:mr-3 text-xl"
                                icon="humbleicons:logout"
                            ></Icon>
                            <span className="hidden md:block text-md">
                                Sign Out
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
