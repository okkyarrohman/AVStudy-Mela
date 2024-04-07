import { Link, router } from "@inertiajs/react";

const ListNotif = ({ data }) => {
    return (
        <>
            <div>
                <h1 className="font-bold text-md sm:text-xl">
                    Notifikasi Informasi
                </h1>
                {data.length != 0 ? (
                    <ul>
                        {data.map((item, idx) => {
                            return (
                                <li
                                    className="bg-white border-b-2 py-3 border-purple-300"
                                    key={idx}
                                >
                                    <Link
                                        href={
                                            item.tipe == "materi"
                                                ? "/siswa/materi"
                                                : item.tipe == "kuis"
                                                ? "/siswa/kuis"
                                                : item.tipe == "proposal"
                                                ? "/siswa/pustaka/proposal"
                                                : item.tipe == "referensi"
                                                ? "/siswa/pustaka/referensi"
                                                : item.tipe == "proyek"
                                                ? "/siswa/proyek"
                                                : ""
                                        }
                                        className="flex items-center"
                                    >
                                        <div className="size-10 bg-purple-300 rounded-full"></div>
                                        <div className="mx-3 w-56">
                                            <div className="flex justify-between items-center">
                                                <h1 className="font-bold text-purple-600 text-sm ">
                                                    {item.pesan.length > 30
                                                        ? item.pesan.slice(
                                                              0,
                                                              27
                                                          ) + "..."
                                                        : item.pesan}
                                                </h1>
                                                <p className="text-xs">
                                                    {new Date(
                                                        item.created_at
                                                    ).toLocaleTimeString(
                                                        "en-US",
                                                        {
                                                            hour: "numeric",
                                                            minute: "numeric",
                                                            hour12: false,
                                                        }
                                                    )}
                                                </p>
                                            </div>
                                            <p className="text-xs line-clamp-1">
                                                {item.deskripsi}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p className="text-center text-blue-950 bg-white border-b-2 py-3 border-purple-300">
                        Belum Ada Notifikasi
                    </p>
                )}
            </div>
        </>
    );
};

export default ListNotif;
