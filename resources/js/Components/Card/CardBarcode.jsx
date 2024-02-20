import ThisDate from "@/Data/ThisDate";

const CardBarcode = () => {
    const thisdate = ThisDate();
    return (
        <>
            <div className="bg-white w-full sm:w-1/2 shadow-xl border-2 rounded-xl border-gray-300">
                <div className="flex flex-col md:flex-row justify-between bg-gray-300 p-4 w-full rounded-t-lg">
                    <h1 className=" font-bold">Absensi hari ini</h1>
                    <p className="italic">{thisdate}</p>
                </div>
                <div className="p-3 flex flex-col justify-center items-center">
                    <img
                        className="object-contain w-2/4 sm:w-2/3"
                        src="/assets/BarCode.svg"
                    />
                    <h1 className="font-black text-sm sm:text-lg">www.attendance.com</h1>
                </div>
            </div>
        </>
    );
};

export default CardBarcode;
