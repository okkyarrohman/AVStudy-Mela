const BannerDashboard = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center md:items-start bg-purple-600 rounded-xl gap-1 md:gap-2 my-5">
                <img
                    src="/assets/HeroImg.svg"
                    className="object-contain w-36 sm:w-44"
                />
                <div className="p-3 text-white w-full h-full flex flex-col self-center">
                    <h1 className="text-lg lg:text-xl xl:text-3xl font-black">
                        Selamat Bergabung di AVStudy!
                    </h1>
                    <p className="text-xs md:text-sm  font-light">
                        "Tingkatkan Pemahaman dengan AVstudy: Menginspirasi
                        Melalui Pengalaman Belajar Audiovisual."
                    </p>
                </div>
            </div>
        </>
    );
};

export default BannerDashboard
