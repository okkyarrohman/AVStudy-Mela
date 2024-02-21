import ChartDashboard from "@/Components/Chart/ChartDashboard";

const CardChart = () => {
    return (
        <>
            <div className="bg-white w-full sm:w-1/2 shadow-xl border-2 rounded-xl border-gray-300 hover:scale-105 active:opacity-50">
                <div className="flex justify-between bg-gray-300 p-4 w-full rounded-t-lg">
                    <h1 className=" font-bold">Kemajuan Kuis</h1>
                </div>
                <div className="flex h-4/5 items-center justify-center">
                    <div className="h-full w-full px-8 py-3">
                        <ChartDashboard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardChart;
