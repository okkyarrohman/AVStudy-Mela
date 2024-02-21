import { Icon } from "@iconify/react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import TableProgressProyek from "@/Components/Table/TableProgressProyek";
import { Link } from "@inertiajs/react";
import ListMateri from "@/Components/List/ListMateri";

const MateriSiswa = () => {
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar/>
                </div>
                <div className="col-span-10 lg:col-span-9 m-10 flex flex-col gap-5">
                    <div className="my-5">
                        <h1 className="font-bold text-2xl">Materi</h1>
                    </div>
                    {[...Array(3)].map((item, idx) => {
                        return (
                            <ListMateri
                                to="/siswa/materi/show"
                                img="/assets/MateriCover.svg"
                                title="Judul Materi"
                                desc="Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Corrupti, repellat
                                architecto."
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default MateriSiswa;
