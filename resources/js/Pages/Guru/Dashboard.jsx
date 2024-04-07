import AbsensInput from "@/Components/AbsensInput/AbsensInput";
import BannerDashboard from "@/Components/Banner/BannerDashboard";

import Sidebar from "@/Components/Sidebar/Sidebar";
import TableSpentHours from "@/Components/Table/TableSpentHours";
import { Link } from "@inertiajs/react";

const Dashboard = ({ absens, siswa, auth }) => {
    console.log("ini siswa : ", siswa);
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10 m-5">
                    <div className="flex flex-col md:grid md:grid-cols-6">
                        <div className="col-span-4">
                            <div>
                                <h1 className="font-bold text-xl text-gray-700">
                                    Halo {auth.user.name},
                                </h1>
                                <p className="font-light text-sm text-gray-500">
                                    Mari Belajar Bersama AVStudy, Hari Ini!
                                </p>
                            </div>
                            <BannerDashboard />
                            <TableSpentHours data={siswa} />
                        </div>
                        <div className="col-span-2">
                            <div className="m-10">
                                <h1 className="font-bold text-xl">Profil</h1>
                                <Link
                                    href={route("profile-guru.edit")}
                                    className="w-full flex flex-col items-center my-5"
                                >
                                    <img
                                        src={
                                            auth.user.foto
                                                ? `/storage/profile/${auth.user.foto}`
                                                : `/assets/PhotoProfile.svg`
                                        }
                                        className="object-cover size-28 rounded-full"
                                    />
                                    <p className="font-bold my-2">
                                        {auth.user.name}
                                    </p>
                                </Link>
                            </div>
                            <div className="mx-10">
                                <AbsensInput
                                    link={absens.link}
                                    img={absens.image}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
