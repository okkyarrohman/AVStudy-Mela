import BannerDashboard from "@/Components/Banner/BannerDashboard";
import CardBarcode from "@/Components/Card/CardBarcode";
import CardChart from "@/Components/Card/CardChart";
import ListNotif from "@/Components/List/ListNotif";
import Sidebar from "@/Components/Sidebar/Sidebar";
import TableProgressProyek from "@/Components/Table/TableProgressProyek";
import { Link } from "@inertiajs/react";

const Dashboard = ({ absens, notifikasis, progresTugas, chartKuis, auth }) => {
    // console.log(chartKuis);
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
                            <div className="flex flex-col sm:flex-row w-full gap-5">
                                <CardBarcode data={absens} />
                                <CardChart data={chartKuis} />
                            </div>
                            <div className="my-10 mx-2">
                                <TableProgressProyek data={progresTugas} />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="m-10">
                                <h1 className="font-bold text-xl"> Profil</h1>
                                <Link
                                    href={route("profile-siswa.edit")}
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
                                <ListNotif data={notifikasis} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
