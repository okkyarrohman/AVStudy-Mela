import { siswaSidebar, guruSidebar } from "./dataSidebar";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const SidebarItems = () => {
    const { url, component } = usePage();
    const [sideitems, setSideitems] = useState([]);

    useEffect(() => {
        if (url.includes("siswa")) {
            setSideitems(siswaSidebar);
        } else {
            setSideitems(guruSidebar);
        }
    });
    return (
        <>
            {sideitems.map((item, idx) => {
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
                              <span className="hidden md:block">
                                  {item.name}
                              </span>
                          </Link>
                      );
                  })
                }
        </>
    );
};

export default SidebarItems;
