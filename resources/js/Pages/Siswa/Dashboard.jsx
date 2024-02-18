import Sidebar from "@/Components/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <>
            <div className="min-h-screen grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
