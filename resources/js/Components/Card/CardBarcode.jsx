import ThisDate from "@/Data/ThisDate";
import { format } from "date-fns";
import QRCode from "react-qr-code";

const CardBarcode = ({ data }) => {
    const thisdate = ThisDate();
    return (
        <>
            <div className="bg-white w-full h-fit sm:w-1/2 shadow-xl border-2 rounded-xl border-gray-300 hover:scale-105 active:opacity-50">
                <div className="flex flex-col md:flex-row justify-between bg-gray-300 p-4 w-full rounded-t-lg">
                    <h1 className=" font-bold">Absensi hari ini</h1>
                    {data && (
                        <p className="italic">
                            {format(new Date(data.created_at), "dd MMMM yyyy")}
                        </p>
                    )}
                </div>
                {data ? (
                    <>
                        <div className="p-3 flex flex-col justify-center items-center">
                            <QRCode value={data.link} className="w-48" />
                            <h1 className="font-black text-sm sm:text-lg line-clamp-1">
                                {data.link}
                            </h1>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <img
                            src="/assets/NotFoundIcon.svg"
                            className="object-contain w-20 mx-auto"
                        />
                        <h1 className="font-semibold text-gray-700">
                            Belum Ada Absensi
                        </h1>
                    </div>
                )}
            </div>
        </>
    );
};

export default CardBarcode;
