import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import TableProgressProyek from "@/Components/Table/TableProgressProyek";
import { Link } from "@inertiajs/react";

const MateriIndex = () => {
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-9 m-10">
                    <div className="my-5">
                        <h1 className="font-bold text-2xl">Materi</h1>
                    </div>
                    <Link href="/siswa/materi/show">
                        <div className="flex items-center gap-3 rounded-xl shadow-xl">
                            <div className="">
                                <img
                                    src="/assets/MateriCover.svg"
                                    className="object-contain w-32"
                                />
                            </div>
                            <div className="w-[70%] ml-5">
                                <h1 className="font-bold text-xl">
                                    No. Judul Materi
                                </h1>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Corrupti, repellat
                                    architecto. Quae tempore vero iste incidunt
                                    assumenda corrupti quia? Commodi quia cumque
                                    possimus error perferendis. Deserunt
                                    veritatis rerum nobis porro.
                                </p>
                            </div>
                            <div className="text-2xl">
                                <Icon icon="ep:arrow-right-bold"></Icon>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MateriIndex;
