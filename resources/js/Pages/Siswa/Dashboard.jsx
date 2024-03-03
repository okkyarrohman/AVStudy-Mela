import BannerDashboard from "@/Components/Banner/BannerDashboard";
import CardBarcode from "@/Components/Card/CardBarcode";
import CardChart from "@/Components/Card/CardChart";
import ListNotif from "@/Components/List/ListNotif";
import Sidebar from "@/Components/Sidebar/Sidebar";
import TableProgressProyek from "@/Components/Table/TableProgressProyek";

const Dashboard = ({absens,newTugases,progresTugas,chartKuis}) => {
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar/>
                </div>
                <div className="col-span-10 m-5">
                    <div className="flex flex-col md:grid md:grid-cols-6">
                        <div className="col-span-4">
                            <div>
                                <h1 className="font-bold text-xl text-gray-700">
                                    Halo Mela,
                                </h1>
                                <p className="font-light text-sm text-gray-500">
                                    Mari Belajar Bersama AVStudy, Hari Ini!
                                </p>
                            </div>
                            <BannerDashboard />
                            <div className="flex flex-col sm:flex-row w-full gap-5">
                                <CardBarcode img={absens[0].image}/>
                                <CardChart data={chartKuis}/>
                            </div>
                            <div className="my-10 mx-2">
                                <TableProgressProyek />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="m-10">
                                <h1 className="font-bold text-xl"> Profil</h1>
                                <div className="w-full flex flex-col items-center my-5">
                                    <img
                                        src="/assets/PhotoProfile.svg"
                                        className="object-contain w-28"
                                    />
                                    <p className="font-bold my-2">
                                        Mela Imroatus
                                    </p>
                                </div>
                                <ListNotif data={newTugases}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
