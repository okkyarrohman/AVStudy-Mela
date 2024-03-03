const TableSpentHours = () => {
    return (
        <>
            <div>
                <div className="bg-white w-full shadow-xl border-2 rounded-lg border-gray-300 active:opacity-50">
                    <div className="flex justify-between bg-gray-300 p-4 w-full rounded-t-lg">
                        <h1 className=" font-bold">
                            Statistik (Hours Spent Real Time)
                        </h1>
                    </div>
                    <div className="flex h-4/5 items-center justify-center">
                        <div className="flex h-full w-full px-5 py-3">
                            <div className="bg-orange-300 rounded-full p-4 me-5"></div>
                            <div className="grid grid-cols-12 w-full items-center justify-between ml-1 mr-2 sm:ml-5 sm:mr-10 gap-3">
                                <div className="col-span-7">
                                    <h1 className="font-bold text-md ">
                                        Nama Manusia
                                    </h1>
                                </div>
                                <div className="col-span-3">
                                    <p> 3000 (Menit)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableSpentHours;
