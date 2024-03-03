import BtnPrimary from "@/element/button/BtnPrimary";
import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

const ListProyek = (props) => {
    const kerjakanHandler = (id) => {
        console.log(id)
       router.get(route("proyek.show",{id : id}))
    };

    const feedbackHandler = (title, id) => {
        Swal.fire({
            html: `
            <div className="flex flex-col justify-center items-center">
            <img src="/assets/QuizLogo.svg" className="object-contain w-64"/>
            <h1 className="font-bold text-3xl mb-3">${title}</h1>
            <p className="font-bold text-sm text-black">Tantang Pengetahuan Anda! Mari Mulai Kuis Kami dan Uji Kemampuan Anda dalam Berbagai Topik yang Menarik</p>
            </div>
            `,
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonColor: "#a855f7",
            focusConfirm: false,
            confirmButtonText: `Mulai`,
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                // router.get(`/siswa/kuis/show/${id}`)
                router.get(route("kuis.show", { id: id }));
            }
        });
    };
    return (
        <div className="flex flex-col gap-3">
            {[...Array(4)].map((item, idx) => {
                const stepKey = `step${idx + 1}`;
                return (
                    <div className="grid grid-cols-12" key={idx}>
                        <div className="col-span-1 self-center bg-purple-400 rounded-full w-10 h-10 mx-3"></div>
                        <div className="col-span-11 flex items-center gap-3 rounded-xl shadow-xl active:opacity-50 border border-gray-300 py-5">
                            <div className="grid grid-cols-12 w-full items-center justify-between mx-5 gap-3">
                                <div className="col-span-2">
                                    <h1 className="font-bold text-md sm:text-lg">
                                        Langkah {idx+1}
                                    </h1>
                                </div>
                                <div className="col-span-6">
                                    <p>{props.show[stepKey] }</p>
                                </div>
                                <div className="col-span-2">
                                    <button
                                        onClick={()=>kerjakanHandler(props.show.id)}
                                        className="w-full bg-purple-500 text-white p-2 rounded-lg"
                                    >
                                        Kerjakan
                                    </button>
                                </div>
                                <div className="col-span-2 text-center">
                                    <button
                                        onClick={""}
                                        className="w-full bg-purple-500 text-white p-2 rounded-lg"
                                    >
                                        Feedback
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListProyek;
