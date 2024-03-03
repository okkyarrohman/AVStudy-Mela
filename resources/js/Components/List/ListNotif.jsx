const ListNotif = ({data}) => {

    return (
        <>
            <div>
                <h1 className="font-bold text-md sm:text-xl">Notifikasi Informasi</h1>
                <ul>
                    {data.map((item, idx) => {
                        return (
                            <li className="bg-white border-b-2 py-3 border-purple-300" key={idx}>
                                <div className="flex items-center">
                                    {/* <img
                                                    src="/assets/PhotoProfile.svg"
                                                    className="w-8"
                                                /> */}
                                    <div className="w-10 h-10 bg-purple-300 rounded-full"></div>
                                    <div className="mx-3">
                                        <h1 className="font-bold text-purple-600 text-sm ">
                                            {item.nama.length > 30?item.nama.slice(0,27)+'...':item.nama}
                                        </h1>
                                        <p className="text-xs">
                                           {item.tenggat}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default ListNotif
